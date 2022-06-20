// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InsuranceFilledSvg from 'icon-base/es/asn/InsuranceFilled';

export interface InsuranceFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconInsuranceFilled: InsuranceFilledIconType = (props, context) => (
    <Icon name='InsuranceFilled' {...{ ...props, ...context.attrs }} icon={InsuranceFilledSvg} />
);

IconInsuranceFilled.displayName = 'IconInsuranceFilled';

export default IconInsuranceFilled;
