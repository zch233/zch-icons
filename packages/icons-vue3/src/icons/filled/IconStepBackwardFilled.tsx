// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StepBackwardFilledSvg from 'icons-base/es/asn/StepBackwardFilled';

export interface StepBackwardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconStepBackwardFilled: StepBackwardFilledIconType = (props, context) => (
    <Icon name='StepBackwardFilled' {...{ ...props, ...context.attrs }} icon={StepBackwardFilledSvg} />
);

IconStepBackwardFilled.displayName = 'IconStepBackwardFilled';
IconStepBackwardFilled.theme = 'filled';
IconStepBackwardFilled.originName = 'step-backward';

export default IconStepBackwardFilled;
