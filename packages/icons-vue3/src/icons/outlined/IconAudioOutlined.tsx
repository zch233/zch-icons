// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AudioOutlinedSvg from 'gupo-icons-base/es/asn/AudioOutlined';

export interface AudioOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAudioOutlined: AudioOutlinedIconType = (props, context) => <Icon name='AudioOutlined' {...{ ...props, ...context.attrs }} icon={AudioOutlinedSvg} />;

IconAudioOutlined.displayName = 'IconAudioOutlined';
IconAudioOutlined.theme = 'outlined';
IconAudioOutlined.originName = 'audio';

export default IconAudioOutlined;
