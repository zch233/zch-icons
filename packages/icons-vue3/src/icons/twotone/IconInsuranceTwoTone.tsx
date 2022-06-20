// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InsuranceTwoToneSvg from 'icon-base/es/asn/InsuranceTwoTone';

export interface InsuranceTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconInsuranceTwoTone: InsuranceTwoToneIconType = (props, context) => (
    <Icon name='InsuranceTwoTone' {...{ ...props, ...context.attrs }} icon={InsuranceTwoToneSvg} />
);

IconInsuranceTwoTone.displayName = 'IconInsuranceTwoTone';

export default IconInsuranceTwoTone;
