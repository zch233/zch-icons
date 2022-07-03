// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ClockCircleFilledSvg from 'icons-base/es/asn/ClockCircleFilled';

export interface ClockCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconClockCircleFilled: ClockCircleFilledIconType = (props, context) => (
    <Icon name='ClockCircleFilled' {...{ ...props, ...context.attrs }} icon={ClockCircleFilledSvg} />
);

IconClockCircleFilled.displayName = 'IconClockCircleFilled';
IconClockCircleFilled.theme = 'filled';
IconClockCircleFilled.originName = 'clock-circle';

export default IconClockCircleFilled;
