// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HourglassOutlinedSvg from 'gupo-icons-base/es/asn/HourglassOutlined';

export interface HourglassOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHourglassOutlined: HourglassOutlinedIconType = (props, context) => (
    <Icon name='HourglassOutlined' {...{ ...props, ...context.attrs }} icon={HourglassOutlinedSvg} />
);

IconHourglassOutlined.displayName = 'IconHourglassOutlined';
IconHourglassOutlined.theme = 'outlined';
IconHourglassOutlined.originName = 'hourglass';

export default IconHourglassOutlined;
