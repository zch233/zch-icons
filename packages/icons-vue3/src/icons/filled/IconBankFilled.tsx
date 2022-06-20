// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BankFilledSvg from 'icon-base/es/asn/BankFilled';

export interface BankFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBankFilled: BankFilledIconType = (props, context) => <Icon name='BankFilled' {...{ ...props, ...context.attrs }} icon={BankFilledSvg} />;

IconBankFilled.displayName = 'IconBankFilled';

export default IconBankFilled;
