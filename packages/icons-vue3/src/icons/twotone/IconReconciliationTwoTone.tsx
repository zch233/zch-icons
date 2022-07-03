// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ReconciliationTwotoneSvg from 'icons-base/es/asn/ReconciliationTwotone';

export interface ReconciliationTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconReconciliationTwotone: ReconciliationTwotoneIconType = (props, context) => (
    <Icon name='ReconciliationTwotone' {...{ ...props, ...context.attrs }} icon={ReconciliationTwotoneSvg} />
);

IconReconciliationTwotone.displayName = 'IconReconciliationTwotone';
IconReconciliationTwotone.theme = 'twotone';
IconReconciliationTwotone.originName = 'reconciliation';

export default IconReconciliationTwotone;
