// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShoppingCartOutlinedSvg from 'icon-base/es/asn/ShoppingCartOutlined';

export interface ShoppingCartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconShoppingCartOutlined: ShoppingCartOutlinedIconType = (props, context) => (
    <Icon name='ShoppingCartOutlined' {...{ ...props, ...context.attrs }} icon={ShoppingCartOutlinedSvg} />
);

IconShoppingCartOutlined.displayName = 'IconShoppingCartOutlined';

export default IconShoppingCartOutlined;
