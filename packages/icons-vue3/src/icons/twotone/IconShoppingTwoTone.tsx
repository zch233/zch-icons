// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShoppingTwotoneSvg from 'gupo-icons-base/es/asn/ShoppingTwotone';

export interface ShoppingTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconShoppingTwotone: ShoppingTwotoneIconType = (props, context) => (
    <Icon name='ShoppingTwotone' {...{ ...props, ...context.attrs }} icon={ShoppingTwotoneSvg} />
);

IconShoppingTwotone.displayName = 'IconShoppingTwotone';
IconShoppingTwotone.theme = 'twotone';
IconShoppingTwotone.originName = 'shopping';

export default IconShoppingTwotone;
