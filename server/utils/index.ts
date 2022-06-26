import fs from 'fs';
import path from 'path';
import shelljs from 'shelljs';

export const getDigest = () => {
    const digestPath = './svg/digest.json';
    createJsonFile(digestPath);
    return JSON.parse(fs.readFileSync(path.resolve(digestPath), 'utf8'));
};

export const setDigest = (digest: any) => {
    fs.writeFileSync(path.resolve('./svg/digest.json'), JSON.stringify(digest, null, 4), 'utf8');
};

export const gitCommitCode = (message: string) => {
    shelljs.exec('git add .');
    shelljs.exec(`git commit -m "feat(auto): ${message}"`);
    // shelljs.exec('git push');
};

export const createJsonFile = (dir: string) => {
    const iconsDir = path.join('./', dir);
    try {
        fs.accessSync(iconsDir);
    } catch (err) {
        fs.appendFileSync(iconsDir, '{}');
    }
};