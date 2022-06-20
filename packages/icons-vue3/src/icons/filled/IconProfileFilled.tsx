// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ProfileFilledSvg from 'icon-base/es/asn/ProfileFilled';

export interface ProfileFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconProfileFilled: ProfileFilledIconType = (props, context) => <Icon name='ProfileFilled' {...{ ...props, ...context.attrs }} icon={ProfileFilledSvg} />;

IconProfileFilled.displayName = 'IconProfileFilled';

export default IconProfileFilled;
