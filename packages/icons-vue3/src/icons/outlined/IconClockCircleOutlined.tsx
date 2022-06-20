// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ClockCircleOutlinedSvg from 'icon-base/es/asn/ClockCircleOutlined';

export interface ClockCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconClockCircleOutlined: ClockCircleOutlinedIconType = (props, context) => (
    <Icon name='ClockCircleOutlined' {...{ ...props, ...context.attrs }} icon={ClockCircleOutlinedSvg} />
);

IconClockCircleOutlined.displayName = 'IconClockCircleOutlined';

export default IconClockCircleOutlined;
