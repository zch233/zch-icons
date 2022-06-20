// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GoogleOutlinedSvg from 'icon-base/es/asn/GoogleOutlined';

export interface GoogleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGoogleOutlined: GoogleOutlinedIconType = (props, context) => (
    <Icon name='GoogleOutlined' {...{ ...props, ...context.attrs }} icon={GoogleOutlinedSvg} />
);

IconGoogleOutlined.displayName = 'IconGoogleOutlined';

export default IconGoogleOutlined;
