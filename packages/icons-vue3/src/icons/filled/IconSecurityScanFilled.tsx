// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SecurityScanFilledSvg from 'icon-base/es/asn/SecurityScanFilled';

export interface SecurityScanFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSecurityScanFilled: SecurityScanFilledIconType = (props, context) => (
    <Icon name='SecurityScanFilled' {...{ ...props, ...context.attrs }} icon={SecurityScanFilledSvg} />
);

IconSecurityScanFilled.displayName = 'IconSecurityScanFilled';

export default IconSecurityScanFilled;
