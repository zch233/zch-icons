// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlipayOutlinedSvg from 'icons-base/es/asn/AlipayOutlined';

export interface AlipayOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAlipayOutlined: AlipayOutlinedIconType = (props, context) => (
    <Icon name='AlipayOutlined' {...{ ...props, ...context.attrs }} icon={AlipayOutlinedSvg} />
);

IconAlipayOutlined.displayName = 'IconAlipayOutlined';
IconAlipayOutlined.theme = 'outlined';
IconAlipayOutlined.originName = 'alipay';

export default IconAlipayOutlined;
