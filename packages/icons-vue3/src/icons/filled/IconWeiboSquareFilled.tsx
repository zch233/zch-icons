// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WeiboSquareFilledSvg from 'icons-base/es/asn/WeiboSquareFilled';

export interface WeiboSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWeiboSquareFilled: WeiboSquareFilledIconType = (props, context) => (
    <Icon name='WeiboSquareFilled' {...{ ...props, ...context.attrs }} icon={WeiboSquareFilledSvg} />
);

IconWeiboSquareFilled.displayName = 'IconWeiboSquareFilled';
IconWeiboSquareFilled.theme = 'filled';
IconWeiboSquareFilled.originName = 'weibo-square';

export default IconWeiboSquareFilled;
