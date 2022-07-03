// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MinusCircleTwotoneSvg from 'icons-base/es/asn/MinusCircleTwotone';

export interface MinusCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMinusCircleTwotone: MinusCircleTwotoneIconType = (props, context) => (
    <Icon name='MinusCircleTwotone' {...{ ...props, ...context.attrs }} icon={MinusCircleTwotoneSvg} />
);

IconMinusCircleTwotone.displayName = 'IconMinusCircleTwotone';
IconMinusCircleTwotone.theme = 'twotone';
IconMinusCircleTwotone.originName = 'minus-circle';

export default IconMinusCircleTwotone;
