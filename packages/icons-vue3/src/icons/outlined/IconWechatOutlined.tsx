// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WechatOutlinedSvg from 'gupo-icons-base/es/asn/WechatOutlined';

export interface WechatOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWechatOutlined: WechatOutlinedIconType = (props, context) => (
    <Icon name='WechatOutlined' {...{ ...props, ...context.attrs }} icon={WechatOutlinedSvg} />
);

IconWechatOutlined.displayName = 'IconWechatOutlined';
IconWechatOutlined.theme = 'outlined';
IconWechatOutlined.originName = 'wechat';

export default IconWechatOutlined;
