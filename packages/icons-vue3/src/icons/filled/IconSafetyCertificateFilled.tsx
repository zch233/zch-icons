// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SafetyCertificateFilledSvg from 'icon-base/es/asn/SafetyCertificateFilled';

export interface SafetyCertificateFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSafetyCertificateFilled: SafetyCertificateFilledIconType = (props, context) => (
    <Icon name='SafetyCertificateFilled' {...{ ...props, ...context.attrs }} icon={SafetyCertificateFilledSvg} />
);

IconSafetyCertificateFilled.displayName = 'IconSafetyCertificateFilled';

export default IconSafetyCertificateFilled;
