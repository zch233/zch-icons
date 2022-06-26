import fs from 'fs';
import path from 'path';

export default defineEventHandler(event => {
    const { status, theme, key, download } = useQuery(event);
    const svgPath = status === 'publish' ? '/packages/icons-base/' : '';
    const data = fs.readFileSync(path.resolve(process.cwd(), `.${svgPath}/svg/${theme}/${key}.svg`), 'utf8');
    return download ? data : { code: 200, message: 'success', data };
});
