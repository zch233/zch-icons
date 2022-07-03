// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FacebookOutlinedSvg from 'icons-base/es/asn/FacebookOutlined';

export interface FacebookOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFacebookOutlined: FacebookOutlinedIconType = (props, context) => (
    <Icon name='FacebookOutlined' {...{ ...props, ...context.attrs }} icon={FacebookOutlinedSvg} />
);

IconFacebookOutlined.displayName = 'IconFacebookOutlined';
IconFacebookOutlined.theme = 'outlined';
IconFacebookOutlined.originName = 'facebook';

export default IconFacebookOutlined;
