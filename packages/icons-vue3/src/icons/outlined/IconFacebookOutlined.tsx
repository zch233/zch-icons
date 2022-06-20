// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FacebookOutlinedSvg from 'icon-base/es/asn/FacebookOutlined';

export interface FacebookOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFacebookOutlined: FacebookOutlinedIconType = (props, context) => (
    <Icon name='FacebookOutlined' {...{ ...props, ...context.attrs }} icon={FacebookOutlinedSvg} />
);

IconFacebookOutlined.displayName = 'IconFacebookOutlined';

export default IconFacebookOutlined;
