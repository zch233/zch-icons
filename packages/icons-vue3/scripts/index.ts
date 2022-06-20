import * as allIconDefs from 'icon-base';
import * as path from 'path';
import * as fs from 'fs';
import { promisify } from 'util';
import { createDir } from './utils';

const writeFile = promisify(fs.writeFile);
const codeRemark = `
// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！
`.trim();

const generateIcons = async () => {
    await createDir('../src/icons');
    // generate icon file
    Promise.all(
        Object.keys(allIconDefs).map(async svgIdentifier => {
            await createDir(`../src/icons/${allIconDefs[svgIdentifier].theme}`);
            const fileName = `Icon${svgIdentifier}`;
            await writeFile(
                path.resolve(__dirname, `../src/icons/${allIconDefs[svgIdentifier].theme}/${fileName}.tsx`),
                `
${codeRemark}

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ${svgIdentifier}Svg from 'icon-base/es/asn/${svgIdentifier}';

export interface ${svgIdentifier}IconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ${fileName}: ${svgIdentifier}IconType = (props, context) => (
    <Icon name='${svgIdentifier}' {...{ ...props, ...context.attrs }} icon={${svgIdentifier}Svg} />
);

${fileName}.displayName = '${fileName}';

export default ${fileName};
                `.trim()
            );
        })
    );

    // generate icon index
    const themes = Array.from(new Set(Object.values(allIconDefs).map(v => v.theme))).sort();
    themes.map(theme => {
        const entryText = Object.keys(allIconDefs)
            .sort()
            .filter(svgIdentifier => allIconDefs[svgIdentifier].theme === theme)
            .map(svgIdentifier => {
                return `export { default as Icon${svgIdentifier} } from './Icon${svgIdentifier}';`;
            })
            .join('\n');
        fs.appendFileSync(
            path.resolve(__dirname, `../src/icons/${theme}/index.tsx`),
            `
${codeRemark}

${entryText}
        `.trim()
        );
        return theme;
    });
    fs.appendFileSync(
        path.resolve(__dirname, '../src/icons/index.tsx'),
        `
${codeRemark}

${themes
    .map(theme => {
        return `export * from './${theme}/index';`;
    })
    .join('\n')}
        `.trim()
    );
};

generateIcons();
