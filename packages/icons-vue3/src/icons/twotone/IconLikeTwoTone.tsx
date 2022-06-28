// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LikeTwotoneSvg from 'gupo-icons-base/es/asn/LikeTwotone';

export interface LikeTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLikeTwotone: LikeTwotoneIconType = (props, context) => <Icon name='LikeTwotone' {...{ ...props, ...context.attrs }} icon={LikeTwotoneSvg} />;

IconLikeTwotone.displayName = 'IconLikeTwotone';
IconLikeTwotone.theme = 'twotone';
IconLikeTwotone.originName = 'like';

export default IconLikeTwotone;
