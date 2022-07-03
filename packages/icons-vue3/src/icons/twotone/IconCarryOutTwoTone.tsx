// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CarryOutTwotoneSvg from 'icons-base/es/asn/CarryOutTwotone';

export interface CarryOutTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCarryOutTwotone: CarryOutTwotoneIconType = (props, context) => (
    <Icon name='CarryOutTwotone' {...{ ...props, ...context.attrs }} icon={CarryOutTwotoneSvg} />
);

IconCarryOutTwotone.displayName = 'IconCarryOutTwotone';
IconCarryOutTwotone.theme = 'twotone';
IconCarryOutTwotone.originName = 'carry-out';

export default IconCarryOutTwotone;
