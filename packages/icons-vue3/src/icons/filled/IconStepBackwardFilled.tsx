// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StepBackwardFilledSvg from 'icon-base/es/asn/StepBackwardFilled';

export interface StepBackwardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconStepBackwardFilled: StepBackwardFilledIconType = (props, context) => (
    <Icon name='StepBackwardFilled' {...{ ...props, ...context.attrs }} icon={StepBackwardFilledSvg} />
);

IconStepBackwardFilled.displayName = 'IconStepBackwardFilled';

export default IconStepBackwardFilled;
