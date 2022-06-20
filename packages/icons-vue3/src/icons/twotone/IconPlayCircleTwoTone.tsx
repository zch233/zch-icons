// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlayCircleTwoToneSvg from 'icon-base/es/asn/PlayCircleTwoTone';

export interface PlayCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPlayCircleTwoTone: PlayCircleTwoToneIconType = (props, context) => (
    <Icon name='PlayCircleTwoTone' {...{ ...props, ...context.attrs }} icon={PlayCircleTwoToneSvg} />
);

IconPlayCircleTwoTone.displayName = 'IconPlayCircleTwoTone';

export default IconPlayCircleTwoTone;
