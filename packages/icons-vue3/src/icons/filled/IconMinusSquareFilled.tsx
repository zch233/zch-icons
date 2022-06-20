// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MinusSquareFilledSvg from 'icon-base/es/asn/MinusSquareFilled';

export interface MinusSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMinusSquareFilled: MinusSquareFilledIconType = (props, context) => (
    <Icon name='MinusSquareFilled' {...{ ...props, ...context.attrs }} icon={MinusSquareFilledSvg} />
);

IconMinusSquareFilled.displayName = 'IconMinusSquareFilled';

export default IconMinusSquareFilled;
