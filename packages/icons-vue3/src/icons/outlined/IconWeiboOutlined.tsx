// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WeiboOutlinedSvg from 'gupo-icons-base/es/asn/WeiboOutlined';

export interface WeiboOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWeiboOutlined: WeiboOutlinedIconType = (props, context) => <Icon name='WeiboOutlined' {...{ ...props, ...context.attrs }} icon={WeiboOutlinedSvg} />;

IconWeiboOutlined.displayName = 'IconWeiboOutlined';
IconWeiboOutlined.theme = 'outlined';
IconWeiboOutlined.originName = 'weibo';

export default IconWeiboOutlined;
