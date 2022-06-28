// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SoundOutlinedSvg from 'gupo-icons-base/es/asn/SoundOutlined';

export interface SoundOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSoundOutlined: SoundOutlinedIconType = (props, context) => <Icon name='SoundOutlined' {...{ ...props, ...context.attrs }} icon={SoundOutlinedSvg} />;

IconSoundOutlined.displayName = 'IconSoundOutlined';
IconSoundOutlined.theme = 'outlined';
IconSoundOutlined.originName = 'sound';

export default IconSoundOutlined;
