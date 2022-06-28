// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GooglePlusOutlinedSvg from 'gupo-icons-base/es/asn/GooglePlusOutlined';

export interface GooglePlusOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGooglePlusOutlined: GooglePlusOutlinedIconType = (props, context) => (
    <Icon name='GooglePlusOutlined' {...{ ...props, ...context.attrs }} icon={GooglePlusOutlinedSvg} />
);

IconGooglePlusOutlined.displayName = 'IconGooglePlusOutlined';
IconGooglePlusOutlined.theme = 'outlined';
IconGooglePlusOutlined.originName = 'google-plus';

export default IconGooglePlusOutlined;
