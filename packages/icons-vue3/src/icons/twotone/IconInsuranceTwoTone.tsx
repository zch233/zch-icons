// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InsuranceTwotoneSvg from 'icons-base/es/asn/InsuranceTwotone';

export interface InsuranceTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconInsuranceTwotone: InsuranceTwotoneIconType = (props, context) => (
    <Icon name='InsuranceTwotone' {...{ ...props, ...context.attrs }} icon={InsuranceTwotoneSvg} />
);

IconInsuranceTwotone.displayName = 'IconInsuranceTwotone';
IconInsuranceTwotone.theme = 'twotone';
IconInsuranceTwotone.originName = 'insurance';

export default IconInsuranceTwotone;
