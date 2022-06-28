// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ProfileFilledSvg from 'gupo-icons-base/es/asn/ProfileFilled';

export interface ProfileFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconProfileFilled: ProfileFilledIconType = (props, context) => <Icon name='ProfileFilled' {...{ ...props, ...context.attrs }} icon={ProfileFilledSvg} />;

IconProfileFilled.displayName = 'IconProfileFilled';
IconProfileFilled.theme = 'filled';
IconProfileFilled.originName = 'profile';

export default IconProfileFilled;
