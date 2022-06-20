// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AudioTwoToneSvg from 'icon-base/es/asn/AudioTwoTone';

export interface AudioTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAudioTwoTone: AudioTwoToneIconType = (props, context) => <Icon name='AudioTwoTone' {...{ ...props, ...context.attrs }} icon={AudioTwoToneSvg} />;

IconAudioTwoTone.displayName = 'IconAudioTwoTone';

export default IconAudioTwoTone;
