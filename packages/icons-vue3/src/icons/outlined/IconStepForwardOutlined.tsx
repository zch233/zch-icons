// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StepForwardOutlinedSvg from 'icon-base/es/asn/StepForwardOutlined';

export interface StepForwardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconStepForwardOutlined: StepForwardOutlinedIconType = (props, context) => (
    <Icon name='StepForwardOutlined' {...{ ...props, ...context.attrs }} icon={StepForwardOutlinedSvg} />
);

IconStepForwardOutlined.displayName = 'IconStepForwardOutlined';

export default IconStepForwardOutlined;
