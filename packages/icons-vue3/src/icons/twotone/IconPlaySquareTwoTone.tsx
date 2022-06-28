// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlaySquareTwotoneSvg from 'gupo-icons-base/es/asn/PlaySquareTwotone';

export interface PlaySquareTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPlaySquareTwotone: PlaySquareTwotoneIconType = (props, context) => (
    <Icon name='PlaySquareTwotone' {...{ ...props, ...context.attrs }} icon={PlaySquareTwotoneSvg} />
);

IconPlaySquareTwotone.displayName = 'IconPlaySquareTwotone';
IconPlaySquareTwotone.theme = 'twotone';
IconPlaySquareTwotone.originName = 'play-square';

export default IconPlaySquareTwotone;
