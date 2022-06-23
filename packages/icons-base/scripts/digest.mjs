'use strict';

// {
//   "svg-name": {
//     "key": "svg-name",
//       "theme": "filled",
//       "status": "stage" | "error",
//       "versions": "0.0.1",
//       "name": "中文",
//       "design": "",
//   }
// }

import path from 'path';
import fs from 'fs';
import { globbySync } from 'globby';

const digest = {};

for (const theme of ['filled', 'outlined', 'twotone', 'colorful']) {
    globbySync(`./svg/${theme}/*.svg`).forEach(p => {
        const parsed = path.parse(p);
        const { name } = parsed;
        digest[name] = { key: name, theme, name: '', version: '1.0.0', status: '', design: '' };
    });
}

fs.writeFileSync(path.resolve('./scripts/digest.json'), JSON.stringify(digest, null, 4), 'utf8');
