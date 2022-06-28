// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlayCircleTwotoneSvg from 'gupo-icons-base/es/asn/PlayCircleTwotone';

export interface PlayCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPlayCircleTwotone: PlayCircleTwotoneIconType = (props, context) => (
    <Icon name='PlayCircleTwotone' {...{ ...props, ...context.attrs }} icon={PlayCircleTwotoneSvg} />
);

IconPlayCircleTwotone.displayName = 'IconPlayCircleTwotone';
IconPlayCircleTwotone.theme = 'twotone';
IconPlayCircleTwotone.originName = 'play-circle';

export default IconPlayCircleTwotone;
