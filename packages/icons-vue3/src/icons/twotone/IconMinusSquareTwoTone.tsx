// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MinusSquareTwotoneSvg from 'icons-base/es/asn/MinusSquareTwotone';

export interface MinusSquareTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMinusSquareTwotone: MinusSquareTwotoneIconType = (props, context) => (
    <Icon name='MinusSquareTwotone' {...{ ...props, ...context.attrs }} icon={MinusSquareTwotoneSvg} />
);

IconMinusSquareTwotone.displayName = 'IconMinusSquareTwotone';
IconMinusSquareTwotone.theme = 'twotone';
IconMinusSquareTwotone.originName = 'minus-square';

export default IconMinusSquareTwotone;
