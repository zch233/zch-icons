// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodeSandboxSquareFilledSvg from 'icons-base/es/asn/CodeSandboxSquareFilled';

export interface CodeSandboxSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCodeSandboxSquareFilled: CodeSandboxSquareFilledIconType = (props, context) => (
    <Icon name='CodeSandboxSquareFilled' {...{ ...props, ...context.attrs }} icon={CodeSandboxSquareFilledSvg} />
);

IconCodeSandboxSquareFilled.displayName = 'IconCodeSandboxSquareFilled';
IconCodeSandboxSquareFilled.theme = 'filled';
IconCodeSandboxSquareFilled.originName = 'code-sandbox-square';

export default IconCodeSandboxSquareFilled;
