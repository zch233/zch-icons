import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { globbySync } from 'globby';
import shelljs from 'shelljs';

const svgDir = 'svg';

const form = formidable({ multiples: true, uploadDir: svgDir, keepExtensions: true });

export default defineEventHandler(async event => {
    await createDir(svgDir);
    await new Promise((resolve, reject) => {
        form.parse(event.event.req, async (err, fields, files) => {
            if (err) throw err;
            const theme = fields.theme?.[0];
            const design = fields.design?.[0];
            const svgFiles = files.file as formidable.File[];
            await createDir(`${svgDir}/${theme}`);
            const generatePath = (fileName: string, themeDir?: string) => path.resolve('./svg', themeDir || '', fileName);
            Promise.allSettled(
                svgFiles.map(
                    ({ originalFilename, newFilename }) =>
                        new Promise(r => r(fs.renameSync(generatePath(newFilename), generatePath(`${originalFilename?.toLowerCase()}`, theme))))
                )
            )
                .then(() => {
                    try {
                        const data = JSON.parse(getDigest());
                        console.log(data);
                    } catch (err) {
                        setDigest({ design });
                    }
                    commitCode(`add ${theme}: ${svgFiles.map(({ originalFilename }) => `${originalFilename?.toLowerCase()}`).join(',')}`);
                })
                .catch(err => {
                    throw err;
                });
            resolve({ theme: fields.theme, files });
        });
    });
    return { code: 200, message: 'success', data: null };
});

export const createDir = async (dir: string) => {
    const iconsDir = path.join('./', dir);
    try {
        await fs.accessSync(iconsDir);
    } catch (err) {
        await fs.mkdirSync(iconsDir);
    }
};

const getDigest = () => fs.readFileSync(path.resolve('./svg/digest.json'), 'utf8');

const setDigest = ({ design }: any) => {
    const digest: any = {};

    for (const theme of ['filled', 'outlined', 'twotone', 'colorful']) {
        globbySync(`./svg/${theme}/*.svg`).forEach(p => {
            const parsed = path.parse(p);
            const { name } = parsed;
            digest[name] = { key: name, theme, name: '', version: '', status: 'stage', design };
        });
    }

    fs.writeFileSync(path.resolve('./svg/digest.json'), JSON.stringify(digest, null, 4), 'utf8');
};

const commitCode = (message: string) => {
    shelljs.exec('git add .');
    shelljs.exec(`git commit -m "feat: ${message}"`);
    shelljs.exec('git push');
};
