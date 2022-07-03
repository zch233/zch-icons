// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LikeFilledSvg from 'icons-base/es/asn/LikeFilled';

export interface LikeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLikeFilled: LikeFilledIconType = (props, context) => <Icon name='LikeFilled' {...{ ...props, ...context.attrs }} icon={LikeFilledSvg} />;

IconLikeFilled.displayName = 'IconLikeFilled';
IconLikeFilled.theme = 'filled';
IconLikeFilled.originName = 'like';

export default IconLikeFilled;
