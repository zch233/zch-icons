import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { getDigest, gitCommitCode, setDigest } from '~/server/utils';

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
            const renameFileTasks: Promise<string>[] = [];
            const svgFilenameCollect: string[] = [];
            const digest = getDigest();
            svgFiles.map(({ originalFilename, newFilename }) => {
                const svgFilename = (originalFilename?.toLowerCase() || 'unknown-file.svg').replace('.svg', '');
                const isExistSvg = !!digest[svgFilename];
                const svgFilenameUnique = isExistSvg ? `${svgFilename}-copy` : svgFilename;
                const svgFilenameUniqueWithExt = `${svgFilenameUnique}.svg`;
                svgFilenameCollect.push(svgFilenameUniqueWithExt);
                renameFileTasks.push(
                    new Promise(resolve => {
                        fs.renameSync(generatePath(newFilename), generatePath(svgFilenameUniqueWithExt, theme));
                        resolve('rename success');
                    })
                );
                digest[svgFilenameUnique] = { key: svgFilenameUnique, theme, name: '', version: '', status: isExistSvg ? 'error' : 'stage', design };
            });
            setDigest(digest);
            Promise.allSettled(renameFileTasks)
                .then(() => {
                    gitCommitCode(`add svg with ${theme}: ${svgFilenameCollect.join(',')}`);
                })
                .catch(err => {
                    throw err;
                });
            resolve({ theme: fields.theme, svgFiles });
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
