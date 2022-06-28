// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlipayCircleOutlinedSvg from 'gupo-icons-base/es/asn/AlipayCircleOutlined';

export interface AlipayCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAlipayCircleOutlined: AlipayCircleOutlinedIconType = (props, context) => (
    <Icon name='AlipayCircleOutlined' {...{ ...props, ...context.attrs }} icon={AlipayCircleOutlinedSvg} />
);

IconAlipayCircleOutlined.displayName = 'IconAlipayCircleOutlined';
IconAlipayCircleOutlined.theme = 'outlined';
IconAlipayCircleOutlined.originName = 'alipay-circle';

export default IconAlipayCircleOutlined;
