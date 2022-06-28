// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShopTwotoneSvg from 'gupo-icons-base/es/asn/ShopTwotone';

export interface ShopTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconShopTwotone: ShopTwotoneIconType = (props, context) => <Icon name='ShopTwotone' {...{ ...props, ...context.attrs }} icon={ShopTwotoneSvg} />;

IconShopTwotone.displayName = 'IconShopTwotone';
IconShopTwotone.theme = 'twotone';
IconShopTwotone.originName = 'shop';

export default IconShopTwotone;
