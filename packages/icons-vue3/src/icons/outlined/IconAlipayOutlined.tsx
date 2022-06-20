// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlipayOutlinedSvg from 'icon-base/es/asn/AlipayOutlined';

export interface AlipayOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAlipayOutlined: AlipayOutlinedIconType = (props, context) => (
    <Icon name='AlipayOutlined' {...{ ...props, ...context.attrs }} icon={AlipayOutlinedSvg} />
);

IconAlipayOutlined.displayName = 'IconAlipayOutlined';

export default IconAlipayOutlined;
