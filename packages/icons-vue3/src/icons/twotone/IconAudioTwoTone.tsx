// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AudioTwotoneSvg from 'gupo-icons-base/es/asn/AudioTwotone';

export interface AudioTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAudioTwotone: AudioTwotoneIconType = (props, context) => <Icon name='AudioTwotone' {...{ ...props, ...context.attrs }} icon={AudioTwotoneSvg} />;

IconAudioTwotone.displayName = 'IconAudioTwotone';
IconAudioTwotone.theme = 'twotone';
IconAudioTwotone.originName = 'audio';

export default IconAudioTwotone;
