// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SecurityScanTwoToneSvg from 'icon-base/es/asn/SecurityScanTwoTone';

export interface SecurityScanTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSecurityScanTwoTone: SecurityScanTwoToneIconType = (props, context) => (
    <Icon name='SecurityScanTwoTone' {...{ ...props, ...context.attrs }} icon={SecurityScanTwoToneSvg} />
);

IconSecurityScanTwoTone.displayName = 'IconSecurityScanTwoTone';

export default IconSecurityScanTwoTone;
