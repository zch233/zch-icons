// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlipaySquareFilledSvg from 'icon-base/es/asn/AlipaySquareFilled';

export interface AlipaySquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAlipaySquareFilled: AlipaySquareFilledIconType = (props, context) => (
    <Icon name='AlipaySquareFilled' {...{ ...props, ...context.attrs }} icon={AlipaySquareFilledSvg} />
);

IconAlipaySquareFilled.displayName = 'IconAlipaySquareFilled';

export default IconAlipaySquareFilled;
