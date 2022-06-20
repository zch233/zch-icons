// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MedicineBoxFilledSvg from 'icon-base/es/asn/MedicineBoxFilled';

export interface MedicineBoxFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMedicineBoxFilled: MedicineBoxFilledIconType = (props, context) => (
    <Icon name='MedicineBoxFilled' {...{ ...props, ...context.attrs }} icon={MedicineBoxFilledSvg} />
);

IconMedicineBoxFilled.displayName = 'IconMedicineBoxFilled';

export default IconMedicineBoxFilled;
