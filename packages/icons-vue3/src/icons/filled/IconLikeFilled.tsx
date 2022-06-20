// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LikeFilledSvg from 'icon-base/es/asn/LikeFilled';

export interface LikeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLikeFilled: LikeFilledIconType = (props, context) => <Icon name='LikeFilled' {...{ ...props, ...context.attrs }} icon={LikeFilledSvg} />;

IconLikeFilled.displayName = 'IconLikeFilled';

export default IconLikeFilled;
