// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodeSandboxOutlinedSvg from 'icons-base/es/asn/CodeSandboxOutlined';

export interface CodeSandboxOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCodeSandboxOutlined: CodeSandboxOutlinedIconType = (props, context) => (
    <Icon name='CodeSandboxOutlined' {...{ ...props, ...context.attrs }} icon={CodeSandboxOutlinedSvg} />
);

IconCodeSandboxOutlined.displayName = 'IconCodeSandboxOutlined';
IconCodeSandboxOutlined.theme = 'outlined';
IconCodeSandboxOutlined.originName = 'code-sandbox';

export default IconCodeSandboxOutlined;
