import fs from 'fs';
import path from 'path';

export default defineEventHandler(() => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), `./packages/icons-base/scripts/digest.json`), 'utf8')));
