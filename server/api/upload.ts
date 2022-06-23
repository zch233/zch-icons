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
            const category = fields.category?.[0];
            const svgFiles = files.file as formidable.File[];
            await createDir(`${svgDir}/${category}`);
            const generatePath = (fileName: string, categoryDir?: string) => path.resolve('./svg', categoryDir || '', fileName);
            Promise.all(
                svgFiles.map(
                    ({ originalFilename, newFilename }) =>
                        new Promise(() => fs.renameSync(generatePath(newFilename), generatePath(originalFilename!, category)))
                )
            ).catch(err => {
                throw err;
            });
            resolve({ category: fields.category, files });
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
