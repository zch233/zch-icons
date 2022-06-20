// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ReconciliationFilledSvg from 'icon-base/es/asn/ReconciliationFilled';

export interface ReconciliationFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconReconciliationFilled: ReconciliationFilledIconType = (props, context) => (
    <Icon name='ReconciliationFilled' {...{ ...props, ...context.attrs }} icon={ReconciliationFilledSvg} />
);

IconReconciliationFilled.displayName = 'IconReconciliationFilled';

export default IconReconciliationFilled;
