// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SafetyCertificateFilledSvg from 'icons-base/es/asn/SafetyCertificateFilled';

export interface SafetyCertificateFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSafetyCertificateFilled: SafetyCertificateFilledIconType = (props, context) => (
    <Icon name='SafetyCertificateFilled' {...{ ...props, ...context.attrs }} icon={SafetyCertificateFilledSvg} />
);

IconSafetyCertificateFilled.displayName = 'IconSafetyCertificateFilled';
IconSafetyCertificateFilled.theme = 'filled';
IconSafetyCertificateFilled.originName = 'safety-certificate';

export default IconSafetyCertificateFilled;
