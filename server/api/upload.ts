import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

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
            Promise.all(
                svgFiles.map(
                    ({ originalFilename, newFilename }) =>
                        new Promise(() => fs.renameSync(generatePath(newFilename), generatePath(`${design}-${originalFilename?.toLowerCase()}`, theme)))
                )
            ).catch(err => {
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
