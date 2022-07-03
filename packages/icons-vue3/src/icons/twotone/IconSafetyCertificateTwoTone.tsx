// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SafetyCertificateTwotoneSvg from 'icons-base/es/asn/SafetyCertificateTwotone';

export interface SafetyCertificateTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSafetyCertificateTwotone: SafetyCertificateTwotoneIconType = (props, context) => (
    <Icon name='SafetyCertificateTwotone' {...{ ...props, ...context.attrs }} icon={SafetyCertificateTwotoneSvg} />
);

IconSafetyCertificateTwotone.displayName = 'IconSafetyCertificateTwotone';
IconSafetyCertificateTwotone.theme = 'twotone';
IconSafetyCertificateTwotone.originName = 'safety-certificate';

export default IconSafetyCertificateTwotone;
