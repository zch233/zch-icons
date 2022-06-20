// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShoppingOutlinedSvg from 'icon-base/es/asn/ShoppingOutlined';

export interface ShoppingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconShoppingOutlined: ShoppingOutlinedIconType = (props, context) => (
    <Icon name='ShoppingOutlined' {...{ ...props, ...context.attrs }} icon={ShoppingOutlinedSvg} />
);

IconShoppingOutlined.displayName = 'IconShoppingOutlined';

export default IconShoppingOutlined;
