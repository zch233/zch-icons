// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShoppingFilledSvg from 'icons-base/es/asn/ShoppingFilled';

export interface ShoppingFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconShoppingFilled: ShoppingFilledIconType = (props, context) => (
    <Icon name='ShoppingFilled' {...{ ...props, ...context.attrs }} icon={ShoppingFilledSvg} />
);

IconShoppingFilled.displayName = 'IconShoppingFilled';
IconShoppingFilled.theme = 'filled';
IconShoppingFilled.originName = 'shopping';

export default IconShoppingFilled;
