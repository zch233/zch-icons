// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SafetyCertificateOutlinedSvg from 'icons-base/es/asn/SafetyCertificateOutlined';

export interface SafetyCertificateOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSafetyCertificateOutlined: SafetyCertificateOutlinedIconType = (props, context) => (
    <Icon name='SafetyCertificateOutlined' {...{ ...props, ...context.attrs }} icon={SafetyCertificateOutlinedSvg} />
);

IconSafetyCertificateOutlined.displayName = 'IconSafetyCertificateOutlined';
IconSafetyCertificateOutlined.theme = 'outlined';
IconSafetyCertificateOutlined.originName = 'safety-certificate';

export default IconSafetyCertificateOutlined;
