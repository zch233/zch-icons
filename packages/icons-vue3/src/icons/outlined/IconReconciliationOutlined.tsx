// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ReconciliationOutlinedSvg from 'gupo-icons-base/es/asn/ReconciliationOutlined';

export interface ReconciliationOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconReconciliationOutlined: ReconciliationOutlinedIconType = (props, context) => (
    <Icon name='ReconciliationOutlined' {...{ ...props, ...context.attrs }} icon={ReconciliationOutlinedSvg} />
);

IconReconciliationOutlined.displayName = 'IconReconciliationOutlined';
IconReconciliationOutlined.theme = 'outlined';
IconReconciliationOutlined.originName = 'reconciliation';

export default IconReconciliationOutlined;
