// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SecurityScanOutlinedSvg from 'icon-base/es/asn/SecurityScanOutlined';

export interface SecurityScanOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSecurityScanOutlined: SecurityScanOutlinedIconType = (props, context) => (
    <Icon name='SecurityScanOutlined' {...{ ...props, ...context.attrs }} icon={SecurityScanOutlinedSvg} />
);

IconSecurityScanOutlined.displayName = 'IconSecurityScanOutlined';

export default IconSecurityScanOutlined;
