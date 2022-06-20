// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WeiboOutlinedSvg from 'icon-base/es/asn/WeiboOutlined';

export interface WeiboOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconWeiboOutlined: WeiboOutlinedIconType = (props, context) => <Icon name='WeiboOutlined' {...{ ...props, ...context.attrs }} icon={WeiboOutlinedSvg} />;

IconWeiboOutlined.displayName = 'IconWeiboOutlined';

export default IconWeiboOutlined;
