import { getDigest } from '~/server/utils';

export default defineEventHandler(event => {
    const digestPath = useQuery(event).type === 'temp' ? '' : '/packages/icons-base/scripts/digest.json';
    return getDigest(digestPath);
});
