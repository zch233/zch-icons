// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HourglassOutlinedSvg from 'icon-base/es/asn/HourglassOutlined';

export interface HourglassOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHourglassOutlined: HourglassOutlinedIconType = (props, context) => (
    <Icon name='HourglassOutlined' {...{ ...props, ...context.attrs }} icon={HourglassOutlinedSvg} />
);

IconHourglassOutlined.displayName = 'IconHourglassOutlined';

export default IconHourglassOutlined;
