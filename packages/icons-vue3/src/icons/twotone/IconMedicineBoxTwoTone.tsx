// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MedicineBoxTwotoneSvg from 'icons-base/es/asn/MedicineBoxTwotone';

export interface MedicineBoxTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMedicineBoxTwotone: MedicineBoxTwotoneIconType = (props, context) => (
    <Icon name='MedicineBoxTwotone' {...{ ...props, ...context.attrs }} icon={MedicineBoxTwotoneSvg} />
);

IconMedicineBoxTwotone.displayName = 'IconMedicineBoxTwotone';
IconMedicineBoxTwotone.theme = 'twotone';
IconMedicineBoxTwotone.originName = 'medicine-box';

export default IconMedicineBoxTwotone;
