// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ClockCircleTwotoneSvg from 'gupo-icons-base/es/asn/ClockCircleTwotone';

export interface ClockCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconClockCircleTwotone: ClockCircleTwotoneIconType = (props, context) => (
    <Icon name='ClockCircleTwotone' {...{ ...props, ...context.attrs }} icon={ClockCircleTwotoneSvg} />
);

IconClockCircleTwotone.displayName = 'IconClockCircleTwotone';
IconClockCircleTwotone.theme = 'twotone';
IconClockCircleTwotone.originName = 'clock-circle';

export default IconClockCircleTwotone;
