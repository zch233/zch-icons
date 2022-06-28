// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlipaySquareFilledSvg from 'gupo-icons-base/es/asn/AlipaySquareFilled';

export interface AlipaySquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAlipaySquareFilled: AlipaySquareFilledIconType = (props, context) => (
    <Icon name='AlipaySquareFilled' {...{ ...props, ...context.attrs }} icon={AlipaySquareFilledSvg} />
);

IconAlipaySquareFilled.displayName = 'IconAlipaySquareFilled';
IconAlipaySquareFilled.theme = 'filled';
IconAlipaySquareFilled.originName = 'alipay-square';

export default IconAlipaySquareFilled;
