// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShopOutlinedSvg from 'icons-base/es/asn/ShopOutlined';

export interface ShopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconShopOutlined: ShopOutlinedIconType = (props, context) => <Icon name='ShopOutlined' {...{ ...props, ...context.attrs }} icon={ShopOutlinedSvg} />;

IconShopOutlined.displayName = 'IconShopOutlined';
IconShopOutlined.theme = 'outlined';
IconShopOutlined.originName = 'shop';

export default IconShopOutlined;
