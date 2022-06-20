// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HourglassFilledSvg from 'icon-base/es/asn/HourglassFilled';

export interface HourglassFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHourglassFilled: HourglassFilledIconType = (props, context) => (
    <Icon name='HourglassFilled' {...{ ...props, ...context.attrs }} icon={HourglassFilledSvg} />
);

IconHourglassFilled.displayName = 'IconHourglassFilled';

export default IconHourglassFilled;
