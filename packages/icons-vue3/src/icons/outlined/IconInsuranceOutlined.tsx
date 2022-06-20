// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InsuranceOutlinedSvg from 'icon-base/es/asn/InsuranceOutlined';

export interface InsuranceOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconInsuranceOutlined: InsuranceOutlinedIconType = (props, context) => (
    <Icon name='InsuranceOutlined' {...{ ...props, ...context.attrs }} icon={InsuranceOutlinedSvg} />
);

IconInsuranceOutlined.displayName = 'IconInsuranceOutlined';

export default IconInsuranceOutlined;
