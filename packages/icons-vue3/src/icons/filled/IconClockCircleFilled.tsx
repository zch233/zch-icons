// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ClockCircleFilledSvg from 'icon-base/es/asn/ClockCircleFilled';

export interface ClockCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconClockCircleFilled: ClockCircleFilledIconType = (props, context) => (
    <Icon name='ClockCircleFilled' {...{ ...props, ...context.attrs }} icon={ClockCircleFilledSvg} />
);

IconClockCircleFilled.displayName = 'IconClockCircleFilled';

export default IconClockCircleFilled;
