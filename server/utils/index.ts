import fs from 'fs';
import path from 'path';
import shelljs from 'shelljs';
import { theme } from '~/server/utils/dict';

export const getDigest = (filePath?: string) => {
    const digestPath = `.${filePath || '/svg/digest.json'}`;
    createDir('svg');
    createJsonFile(digestPath);
    return JSON.parse(fs.readFileSync(path.resolve(digestPath), 'utf8'));
};

export const setDigest = ({ filePath, digest }: { filePath?: string; digest: any }) => {
    fs.writeFileSync(path.resolve(`.${filePath || '/svg/digest.json'}`), JSON.stringify(digest, null, 4), 'utf8');
};

export const gitCommitCode = (message: string) => {
    shelljs.exec('git add ./svg ./packages');
    shelljs.exec(`git commit -m "feat(auto): ${message}" -n`);
    shelljs.exec('git push');
};

export const createDir = (dir: string) => {
    const iconsDir = path.join('./', dir);
    try {
        fs.accessSync(iconsDir);
    } catch (err) {
        fs.mkdirSync(iconsDir);
    }
};

export const createJsonFile = (dir: string) => {
    const iconsDir = path.resolve(process.cwd(), dir);
    try {
        fs.accessSync(iconsDir);
    } catch (err) {
        fs.appendFileSync(iconsDir, '{}');
    }
};

export const validate = ({ formData, originData }: any) => {
    const themes = Object.keys(theme.label);
    if (!themes.includes(formData.theme) || !themes.includes(originData.theme)) {
        throw '主题错误';
    }
};
