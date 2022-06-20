// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WeiboSquareOutlinedSvg from 'icon-base/es/asn/WeiboSquareOutlined';

export interface WeiboSquareOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconWeiboSquareOutlined: WeiboSquareOutlinedIconType = (props, context) => (
    <Icon name='WeiboSquareOutlined' {...{ ...props, ...context.attrs }} icon={WeiboSquareOutlinedSvg} />
);

IconWeiboSquareOutlined.displayName = 'IconWeiboSquareOutlined';

export default IconWeiboSquareOutlined;
