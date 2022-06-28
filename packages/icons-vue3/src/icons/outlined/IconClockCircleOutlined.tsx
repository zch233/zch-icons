// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ClockCircleOutlinedSvg from 'gupo-icons-base/es/asn/ClockCircleOutlined';

export interface ClockCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconClockCircleOutlined: ClockCircleOutlinedIconType = (props, context) => (
    <Icon name='ClockCircleOutlined' {...{ ...props, ...context.attrs }} icon={ClockCircleOutlinedSvg} />
);

IconClockCircleOutlined.displayName = 'IconClockCircleOutlined';
IconClockCircleOutlined.theme = 'outlined';
IconClockCircleOutlined.originName = 'clock-circle';

export default IconClockCircleOutlined;
