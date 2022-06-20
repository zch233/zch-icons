// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AudioOutlinedSvg from 'icon-base/es/asn/AudioOutlined';

export interface AudioOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAudioOutlined: AudioOutlinedIconType = (props, context) => <Icon name='AudioOutlined' {...{ ...props, ...context.attrs }} icon={AudioOutlinedSvg} />;

IconAudioOutlined.displayName = 'IconAudioOutlined';

export default IconAudioOutlined;
