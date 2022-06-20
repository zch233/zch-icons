// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CarryOutTwoToneSvg from 'icon-base/es/asn/CarryOutTwoTone';

export interface CarryOutTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCarryOutTwoTone: CarryOutTwoToneIconType = (props, context) => (
    <Icon name='CarryOutTwoTone' {...{ ...props, ...context.attrs }} icon={CarryOutTwoToneSvg} />
);

IconCarryOutTwoTone.displayName = 'IconCarryOutTwoTone';

export default IconCarryOutTwoTone;
