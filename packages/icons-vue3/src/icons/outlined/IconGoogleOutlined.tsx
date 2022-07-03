// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GoogleOutlinedSvg from 'icons-base/es/asn/GoogleOutlined';

export interface GoogleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGoogleOutlined: GoogleOutlinedIconType = (props, context) => (
    <Icon name='GoogleOutlined' {...{ ...props, ...context.attrs }} icon={GoogleOutlinedSvg} />
);

IconGoogleOutlined.displayName = 'IconGoogleOutlined';
IconGoogleOutlined.theme = 'outlined';
IconGoogleOutlined.originName = 'google';

export default IconGoogleOutlined;
