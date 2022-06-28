// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StepBackwardOutlinedSvg from 'gupo-icons-base/es/asn/StepBackwardOutlined';

export interface StepBackwardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconStepBackwardOutlined: StepBackwardOutlinedIconType = (props, context) => (
    <Icon name='StepBackwardOutlined' {...{ ...props, ...context.attrs }} icon={StepBackwardOutlinedSvg} />
);

IconStepBackwardOutlined.displayName = 'IconStepBackwardOutlined';
IconStepBackwardOutlined.theme = 'outlined';
IconStepBackwardOutlined.originName = 'step-backward';

export default IconStepBackwardOutlined;
