// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HourglassTwotoneSvg from 'gupo-icons-base/es/asn/HourglassTwotone';

export interface HourglassTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHourglassTwotone: HourglassTwotoneIconType = (props, context) => (
    <Icon name='HourglassTwotone' {...{ ...props, ...context.attrs }} icon={HourglassTwotoneSvg} />
);

IconHourglassTwotone.displayName = 'IconHourglassTwotone';
IconHourglassTwotone.theme = 'twotone';
IconHourglassTwotone.originName = 'hourglass';

export default IconHourglassTwotone;
