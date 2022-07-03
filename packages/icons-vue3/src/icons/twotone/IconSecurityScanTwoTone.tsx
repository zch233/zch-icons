// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SecurityScanTwotoneSvg from 'icons-base/es/asn/SecurityScanTwotone';

export interface SecurityScanTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSecurityScanTwotone: SecurityScanTwotoneIconType = (props, context) => (
    <Icon name='SecurityScanTwotone' {...{ ...props, ...context.attrs }} icon={SecurityScanTwotoneSvg} />
);

IconSecurityScanTwotone.displayName = 'IconSecurityScanTwotone';
IconSecurityScanTwotone.theme = 'twotone';
IconSecurityScanTwotone.originName = 'security-scan';

export default IconSecurityScanTwotone;
