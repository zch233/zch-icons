// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShopOutlinedSvg from 'icon-base/es/asn/ShopOutlined';

export interface ShopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconShopOutlined: ShopOutlinedIconType = (props, context) => <Icon name='ShopOutlined' {...{ ...props, ...context.attrs }} icon={ShopOutlinedSvg} />;

IconShopOutlined.displayName = 'IconShopOutlined';

export default IconShopOutlined;
