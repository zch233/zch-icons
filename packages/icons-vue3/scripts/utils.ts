import * as path from 'path';
import * as fs from 'fs';

export const createDir = async (dir: string) => {
    const iconsDir = path.join(__dirname, dir);
    try {
        await fs.accessSync(iconsDir);
    } catch (err) {
        await fs.mkdirSync(iconsDir);
    }
};
