// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AuditOutlinedSvg from 'icons-base/es/asn/AuditOutlined';

export interface AuditOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAuditOutlined: AuditOutlinedIconType = (props, context) => <Icon name='AuditOutlined' {...{ ...props, ...context.attrs }} icon={AuditOutlinedSvg} />;

IconAuditOutlined.displayName = 'IconAuditOutlined';
IconAuditOutlined.theme = 'outlined';
IconAuditOutlined.originName = 'audit';

export default IconAuditOutlined;
