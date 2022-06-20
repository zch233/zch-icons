// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CarryOutFilledSvg from 'icon-base/es/asn/CarryOutFilled';

export interface CarryOutFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCarryOutFilled: CarryOutFilledIconType = (props, context) => (
    <Icon name='CarryOutFilled' {...{ ...props, ...context.attrs }} icon={CarryOutFilledSvg} />
);

IconCarryOutFilled.displayName = 'IconCarryOutFilled';

export default IconCarryOutFilled;
