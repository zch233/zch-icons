// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StarTwotoneSvg from 'icons-base/es/asn/StarTwotone';

export interface StarTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconStarTwotone: StarTwotoneIconType = (props, context) => <Icon name='StarTwotone' {...{ ...props, ...context.attrs }} icon={StarTwotoneSvg} />;

IconStarTwotone.displayName = 'IconStarTwotone';
IconStarTwotone.theme = 'twotone';
IconStarTwotone.originName = 'star';

export default IconStarTwotone;
