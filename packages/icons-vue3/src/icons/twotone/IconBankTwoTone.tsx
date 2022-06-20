// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BankTwoToneSvg from 'icon-base/es/asn/BankTwoTone';

export interface BankTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBankTwoTone: BankTwoToneIconType = (props, context) => <Icon name='BankTwoTone' {...{ ...props, ...context.attrs }} icon={BankTwoToneSvg} />;

IconBankTwoTone.displayName = 'IconBankTwoTone';

export default IconBankTwoTone;
