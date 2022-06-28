// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlayCircleFilledSvg from 'gupo-icons-base/es/asn/PlayCircleFilled';

export interface PlayCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPlayCircleFilled: PlayCircleFilledIconType = (props, context) => (
    <Icon name='PlayCircleFilled' {...{ ...props, ...context.attrs }} icon={PlayCircleFilledSvg} />
);

IconPlayCircleFilled.displayName = 'IconPlayCircleFilled';
IconPlayCircleFilled.theme = 'filled';
IconPlayCircleFilled.originName = 'play-circle';

export default IconPlayCircleFilled;
