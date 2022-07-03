// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WeiboCircleOutlinedSvg from 'icons-base/es/asn/WeiboCircleOutlined';

export interface WeiboCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWeiboCircleOutlined: WeiboCircleOutlinedIconType = (props, context) => (
    <Icon name='WeiboCircleOutlined' {...{ ...props, ...context.attrs }} icon={WeiboCircleOutlinedSvg} />
);

IconWeiboCircleOutlined.displayName = 'IconWeiboCircleOutlined';
IconWeiboCircleOutlined.theme = 'outlined';
IconWeiboCircleOutlined.originName = 'weibo-circle';

export default IconWeiboCircleOutlined;
