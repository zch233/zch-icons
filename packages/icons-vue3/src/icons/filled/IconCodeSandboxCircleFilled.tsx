// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CodeSandboxCircleFilledSvg from 'icon-base/es/asn/CodeSandboxCircleFilled';

export interface CodeSandboxCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCodeSandboxCircleFilled: CodeSandboxCircleFilledIconType = (props, context) => (
    <Icon name='CodeSandboxCircleFilled' {...{ ...props, ...context.attrs }} icon={CodeSandboxCircleFilledSvg} />
);

IconCodeSandboxCircleFilled.displayName = 'IconCodeSandboxCircleFilled';

export default IconCodeSandboxCircleFilled;
