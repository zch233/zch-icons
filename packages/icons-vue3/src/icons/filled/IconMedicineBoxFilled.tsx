// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MedicineBoxFilledSvg from 'gupo-icons-base/es/asn/MedicineBoxFilled';

export interface MedicineBoxFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMedicineBoxFilled: MedicineBoxFilledIconType = (props, context) => (
    <Icon name='MedicineBoxFilled' {...{ ...props, ...context.attrs }} icon={MedicineBoxFilledSvg} />
);

IconMedicineBoxFilled.displayName = 'IconMedicineBoxFilled';
IconMedicineBoxFilled.theme = 'filled';
IconMedicineBoxFilled.originName = 'medicine-box';

export default IconMedicineBoxFilled;
