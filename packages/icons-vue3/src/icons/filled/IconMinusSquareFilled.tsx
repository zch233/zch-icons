// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MinusSquareFilledSvg from 'icons-base/es/asn/MinusSquareFilled';

export interface MinusSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMinusSquareFilled: MinusSquareFilledIconType = (props, context) => (
    <Icon name='MinusSquareFilled' {...{ ...props, ...context.attrs }} icon={MinusSquareFilledSvg} />
);

IconMinusSquareFilled.displayName = 'IconMinusSquareFilled';
IconMinusSquareFilled.theme = 'filled';
IconMinusSquareFilled.originName = 'minus-square';

export default IconMinusSquareFilled;
