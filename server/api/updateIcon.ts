import { createDir, getDigest, gitCommitCode, setDigest, validate } from '~/server/utils';
import fs from 'fs';
import { Theme } from '~/server/types';

export default defineEventHandler(async event => {
    const { formData, originData } = await useBody(event);
    validate({ formData, originData });
    const isPublishedIcon = originData.status === 'publish';
    const digestPath = isPublishedIcon ? '/packages/icons-base/scripts/digest.json' : '';
    const digest = getDigest(digestPath);
    const getFilePath = ({ theme, key }: { theme: Theme; key: string }) =>
        isPublishedIcon ? `./packages/icons-base/svg/${theme}/${key}.svg` : `./svg/${theme}/${key}.svg`;
    digest[originData.theme] = digest[originData.theme] || {};
    digest[formData.theme] = digest[formData.theme] || {};
    const oldData = { ...digest[originData.theme][originData.key] };
    const newData = { ...oldData, name: formData.name, theme: formData.theme };
    digest[originData.theme][originData.key] = undefined;
    digest[formData.theme][originData.key] = newData;
    if (originData.theme !== formData.theme) {
        createDir(getFilePath(formData).replace(`${formData.key}.svg`, ''));
        fs.renameSync(getFilePath(originData), getFilePath(formData));
    }
    setDigest({ filePath: digestPath, digest });
    gitCommitCode(`update ${JSON.stringify(oldData).replace(/"/g, "'")} => ${JSON.stringify(newData).replace(/"/g, "'")}`);
    return { code: 200, message: 'success', data: null };
});
