// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WeiboCircleOutlinedSvg from 'icon-base/es/asn/WeiboCircleOutlined';

export interface WeiboCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconWeiboCircleOutlined: WeiboCircleOutlinedIconType = (props, context) => (
    <Icon name='WeiboCircleOutlined' {...{ ...props, ...context.attrs }} icon={WeiboCircleOutlinedSvg} />
);

IconWeiboCircleOutlined.displayName = 'IconWeiboCircleOutlined';

export default IconWeiboCircleOutlined;
