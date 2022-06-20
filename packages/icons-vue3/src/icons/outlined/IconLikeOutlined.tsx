// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LikeOutlinedSvg from 'icon-base/es/asn/LikeOutlined';

export interface LikeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLikeOutlined: LikeOutlinedIconType = (props, context) => <Icon name='LikeOutlined' {...{ ...props, ...context.attrs }} icon={LikeOutlinedSvg} />;

IconLikeOutlined.displayName = 'IconLikeOutlined';

export default IconLikeOutlined;
