// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WechatOutlinedSvg from 'icon-base/es/asn/WechatOutlined';

export interface WechatOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconWechatOutlined: WechatOutlinedIconType = (props, context) => (
    <Icon name='WechatOutlined' {...{ ...props, ...context.attrs }} icon={WechatOutlinedSvg} />
);

IconWechatOutlined.displayName = 'IconWechatOutlined';

export default IconWechatOutlined;
