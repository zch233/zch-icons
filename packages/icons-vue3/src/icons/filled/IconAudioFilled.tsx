// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AudioFilledSvg from 'icon-base/es/asn/AudioFilled';

export interface AudioFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAudioFilled: AudioFilledIconType = (props, context) => <Icon name='AudioFilled' {...{ ...props, ...context.attrs }} icon={AudioFilledSvg} />;

IconAudioFilled.displayName = 'IconAudioFilled';

export default IconAudioFilled;
