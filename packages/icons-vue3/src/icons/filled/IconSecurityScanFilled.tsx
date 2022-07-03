// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SecurityScanFilledSvg from 'icons-base/es/asn/SecurityScanFilled';

export interface SecurityScanFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSecurityScanFilled: SecurityScanFilledIconType = (props, context) => (
    <Icon name='SecurityScanFilled' {...{ ...props, ...context.attrs }} icon={SecurityScanFilledSvg} />
);

IconSecurityScanFilled.displayName = 'IconSecurityScanFilled';
IconSecurityScanFilled.theme = 'filled';
IconSecurityScanFilled.originName = 'security-scan';

export default IconSecurityScanFilled;
