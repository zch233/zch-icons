import fs from 'fs';
import path from 'path';

export default defineEventHandler(event => fs.readFileSync(path.resolve(process.cwd(), `./pages/${useQuery(event).path}/index.md`), 'utf8'));
