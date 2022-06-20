// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShopFilledSvg from 'icon-base/es/asn/ShopFilled';

export interface ShopFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconShopFilled: ShopFilledIconType = (props, context) => <Icon name='ShopFilled' {...{ ...props, ...context.attrs }} icon={ShopFilledSvg} />;

IconShopFilled.displayName = 'IconShopFilled';

export default IconShopFilled;
