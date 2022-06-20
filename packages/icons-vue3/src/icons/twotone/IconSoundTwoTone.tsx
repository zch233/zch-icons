// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SoundTwoToneSvg from 'icon-base/es/asn/SoundTwoTone';

export interface SoundTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSoundTwoTone: SoundTwoToneIconType = (props, context) => <Icon name='SoundTwoTone' {...{ ...props, ...context.attrs }} icon={SoundTwoToneSvg} />;

IconSoundTwoTone.displayName = 'IconSoundTwoTone';

export default IconSoundTwoTone;
