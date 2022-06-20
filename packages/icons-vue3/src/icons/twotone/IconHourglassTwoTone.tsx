// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HourglassTwoToneSvg from 'icon-base/es/asn/HourglassTwoTone';

export interface HourglassTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHourglassTwoTone: HourglassTwoToneIconType = (props, context) => (
    <Icon name='HourglassTwoTone' {...{ ...props, ...context.attrs }} icon={HourglassTwoToneSvg} />
);

IconHourglassTwoTone.displayName = 'IconHourglassTwoTone';

export default IconHourglassTwoTone;
