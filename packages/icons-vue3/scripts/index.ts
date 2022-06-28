import * as allIconDefs from 'gupo-icons-base';
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
            const { theme, name } = allIconDefs[svgIdentifier];
            await createDir(`../src/icons/${theme}`);
            const fileName = `Icon${svgIdentifier}`;
            await writeFile(
                path.resolve(__dirname, `../src/icons/${theme}/${fileName}.tsx`),
                `
${codeRemark}

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ${svgIdentifier}Svg from 'gupo-icons-base/es/asn/${svgIdentifier}';

export interface ${svgIdentifier}IconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const ${fileName}: ${svgIdentifier}IconType = (props, context) => (
    <Icon name='${svgIdentifier}' {...{ ...props, ...context.attrs }} icon={${svgIdentifier}Svg} />
);

${fileName}.displayName = '${fileName}';
${fileName}.theme = '${theme}';
${fileName}.originName = '${name}';

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
