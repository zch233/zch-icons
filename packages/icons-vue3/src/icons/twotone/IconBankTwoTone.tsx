// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BankTwotoneSvg from 'icons-base/es/asn/BankTwotone';

export interface BankTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBankTwotone: BankTwotoneIconType = (props, context) => <Icon name='BankTwotone' {...{ ...props, ...context.attrs }} icon={BankTwotoneSvg} />;

IconBankTwotone.displayName = 'IconBankTwotone';
IconBankTwotone.theme = 'twotone';
IconBankTwotone.originName = 'bank';

export default IconBankTwotone;
