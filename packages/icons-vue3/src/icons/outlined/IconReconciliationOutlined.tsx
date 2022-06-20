// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ReconciliationOutlinedSvg from 'icon-base/es/asn/ReconciliationOutlined';

export interface ReconciliationOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconReconciliationOutlined: ReconciliationOutlinedIconType = (props, context) => (
    <Icon name='ReconciliationOutlined' {...{ ...props, ...context.attrs }} icon={ReconciliationOutlinedSvg} />
);

IconReconciliationOutlined.displayName = 'IconReconciliationOutlined';

export default IconReconciliationOutlined;
