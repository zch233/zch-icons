// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StepForwardFilledSvg from 'gupo-icons-base/es/asn/StepForwardFilled';

export interface StepForwardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconStepForwardFilled: StepForwardFilledIconType = (props, context) => (
    <Icon name='StepForwardFilled' {...{ ...props, ...context.attrs }} icon={StepForwardFilledSvg} />
);

IconStepForwardFilled.displayName = 'IconStepForwardFilled';
IconStepForwardFilled.theme = 'filled';
IconStepForwardFilled.originName = 'step-forward';

export default IconStepForwardFilled;
