// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GooglePlusOutlinedSvg from 'icon-base/es/asn/GooglePlusOutlined';

export interface GooglePlusOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGooglePlusOutlined: GooglePlusOutlinedIconType = (props, context) => (
    <Icon name='GooglePlusOutlined' {...{ ...props, ...context.attrs }} icon={GooglePlusOutlinedSvg} />
);

IconGooglePlusOutlined.displayName = 'IconGooglePlusOutlined';

export default IconGooglePlusOutlined;
