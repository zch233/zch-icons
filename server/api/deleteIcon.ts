import { getDigest, gitCommitCode, setDigest } from '~/server/utils';
import fs from 'fs';

export default defineEventHandler(async event => {
    const { originData } = await useBody(event);
    const { theme, key } = originData;
    const isPublishedIcon = originData.status === 'publish';
    const digestPath = isPublishedIcon ? '/packages/icons-base/scripts/digest.json' : '';
    const digest = getDigest(digestPath);
    const filePath = isPublishedIcon ? `./packages/icons-base/svg/${theme}/${key}.svg` : `./svg/${theme}/${key}.svg`;
    digest[theme][key] = undefined;
    fs.rmSync(filePath);
    setDigest({ filePath: digestPath, digest });
    gitCommitCode(`delete ${originData.key}.svg`);
    return { code: 200, message: 'success', data: null };
});
