// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BankFilledSvg from 'icons-base/es/asn/BankFilled';

export interface BankFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBankFilled: BankFilledIconType = (props, context) => <Icon name='BankFilled' {...{ ...props, ...context.attrs }} icon={BankFilledSvg} />;

IconBankFilled.displayName = 'IconBankFilled';
IconBankFilled.theme = 'filled';
IconBankFilled.originName = 'bank';

export default IconBankFilled;
