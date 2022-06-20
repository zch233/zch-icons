// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CarryOutOutlinedSvg from 'icon-base/es/asn/CarryOutOutlined';

export interface CarryOutOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCarryOutOutlined: CarryOutOutlinedIconType = (props, context) => (
    <Icon name='CarryOutOutlined' {...{ ...props, ...context.attrs }} icon={CarryOutOutlinedSvg} />
);

IconCarryOutOutlined.displayName = 'IconCarryOutOutlined';

export default IconCarryOutOutlined;
