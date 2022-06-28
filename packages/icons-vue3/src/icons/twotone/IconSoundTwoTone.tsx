// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SoundTwotoneSvg from 'gupo-icons-base/es/asn/SoundTwotone';

export interface SoundTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSoundTwotone: SoundTwotoneIconType = (props, context) => <Icon name='SoundTwotone' {...{ ...props, ...context.attrs }} icon={SoundTwotoneSvg} />;

IconSoundTwotone.displayName = 'IconSoundTwotone';
IconSoundTwotone.theme = 'twotone';
IconSoundTwotone.originName = 'sound';

export default IconSoundTwotone;
