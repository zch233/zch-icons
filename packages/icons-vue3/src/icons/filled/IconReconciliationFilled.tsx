// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ReconciliationFilledSvg from 'icons-base/es/asn/ReconciliationFilled';

export interface ReconciliationFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconReconciliationFilled: ReconciliationFilledIconType = (props, context) => (
    <Icon name='ReconciliationFilled' {...{ ...props, ...context.attrs }} icon={ReconciliationFilledSvg} />
);

IconReconciliationFilled.displayName = 'IconReconciliationFilled';
IconReconciliationFilled.theme = 'filled';
IconReconciliationFilled.originName = 'reconciliation';

export default IconReconciliationFilled;
