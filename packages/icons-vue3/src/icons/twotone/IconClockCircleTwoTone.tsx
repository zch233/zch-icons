// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ClockCircleTwoToneSvg from 'icon-base/es/asn/ClockCircleTwoTone';

export interface ClockCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconClockCircleTwoTone: ClockCircleTwoToneIconType = (props, context) => (
    <Icon name='ClockCircleTwoTone' {...{ ...props, ...context.attrs }} icon={ClockCircleTwoToneSvg} />
);

IconClockCircleTwoTone.displayName = 'IconClockCircleTwoTone';

export default IconClockCircleTwoTone;
