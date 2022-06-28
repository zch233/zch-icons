// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShopFilledSvg from 'gupo-icons-base/es/asn/ShopFilled';

export interface ShopFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconShopFilled: ShopFilledIconType = (props, context) => <Icon name='ShopFilled' {...{ ...props, ...context.attrs }} icon={ShopFilledSvg} />;

IconShopFilled.displayName = 'IconShopFilled';
IconShopFilled.theme = 'filled';
IconShopFilled.originName = 'shop';

export default IconShopFilled;
