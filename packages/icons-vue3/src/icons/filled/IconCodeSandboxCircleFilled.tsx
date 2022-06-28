// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodeSandboxCircleFilledSvg from 'gupo-icons-base/es/asn/CodeSandboxCircleFilled';

export interface CodeSandboxCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCodeSandboxCircleFilled: CodeSandboxCircleFilledIconType = (props, context) => (
    <Icon name='CodeSandboxCircleFilled' {...{ ...props, ...context.attrs }} icon={CodeSandboxCircleFilledSvg} />
);

IconCodeSandboxCircleFilled.displayName = 'IconCodeSandboxCircleFilled';
IconCodeSandboxCircleFilled.theme = 'filled';
IconCodeSandboxCircleFilled.originName = 'code-sandbox-circle';

export default IconCodeSandboxCircleFilled;
