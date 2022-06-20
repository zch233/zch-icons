// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SoundFilledSvg from 'icon-base/es/asn/SoundFilled';

export interface SoundFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSoundFilled: SoundFilledIconType = (props, context) => <Icon name='SoundFilled' {...{ ...props, ...context.attrs }} icon={SoundFilledSvg} />;

IconSoundFilled.displayName = 'IconSoundFilled';

export default IconSoundFilled;
