// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ProfileTwotoneSvg from 'icons-base/es/asn/ProfileTwotone';

export interface ProfileTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconProfileTwotone: ProfileTwotoneIconType = (props, context) => (
    <Icon name='ProfileTwotone' {...{ ...props, ...context.attrs }} icon={ProfileTwotoneSvg} />
);

IconProfileTwotone.displayName = 'IconProfileTwotone';
IconProfileTwotone.theme = 'twotone';
IconProfileTwotone.originName = 'profile';

export default IconProfileTwotone;
