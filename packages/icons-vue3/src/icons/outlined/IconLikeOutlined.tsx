// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LikeOutlinedSvg from 'gupo-icons-base/es/asn/LikeOutlined';

export interface LikeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLikeOutlined: LikeOutlinedIconType = (props, context) => <Icon name='LikeOutlined' {...{ ...props, ...context.attrs }} icon={LikeOutlinedSvg} />;

IconLikeOutlined.displayName = 'IconLikeOutlined';
IconLikeOutlined.theme = 'outlined';
IconLikeOutlined.originName = 'like';

export default IconLikeOutlined;
