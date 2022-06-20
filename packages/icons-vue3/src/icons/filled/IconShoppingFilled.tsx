// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ShoppingFilledSvg from 'icon-base/es/asn/ShoppingFilled';

export interface ShoppingFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconShoppingFilled: ShoppingFilledIconType = (props, context) => (
    <Icon name='ShoppingFilled' {...{ ...props, ...context.attrs }} icon={ShoppingFilledSvg} />
);

IconShoppingFilled.displayName = 'IconShoppingFilled';

export default IconShoppingFilled;
