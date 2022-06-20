// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WechatFilledSvg from 'icon-base/es/asn/WechatFilled';

export interface WechatFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconWechatFilled: WechatFilledIconType = (props, context) => <Icon name='WechatFilled' {...{ ...props, ...context.attrs }} icon={WechatFilledSvg} />;

IconWechatFilled.displayName = 'IconWechatFilled';

export default IconWechatFilled;
