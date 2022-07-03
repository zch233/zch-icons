// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShoppingCartOutlinedSvg from 'icons-base/es/asn/ShoppingCartOutlined';

export interface ShoppingCartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconShoppingCartOutlined: ShoppingCartOutlinedIconType = (props, context) => (
    <Icon name='ShoppingCartOutlined' {...{ ...props, ...context.attrs }} icon={ShoppingCartOutlinedSvg} />
);

IconShoppingCartOutlined.displayName = 'IconShoppingCartOutlined';
IconShoppingCartOutlined.theme = 'outlined';
IconShoppingCartOutlined.originName = 'shopping-cart';

export default IconShoppingCartOutlined;
