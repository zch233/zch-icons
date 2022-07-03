// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WeiboCircleFilledSvg from 'icons-base/es/asn/WeiboCircleFilled';

export interface WeiboCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWeiboCircleFilled: WeiboCircleFilledIconType = (props, context) => (
    <Icon name='WeiboCircleFilled' {...{ ...props, ...context.attrs }} icon={WeiboCircleFilledSvg} />
);

IconWeiboCircleFilled.displayName = 'IconWeiboCircleFilled';
IconWeiboCircleFilled.theme = 'filled';
IconWeiboCircleFilled.originName = 'weibo-circle';

export default IconWeiboCircleFilled;
