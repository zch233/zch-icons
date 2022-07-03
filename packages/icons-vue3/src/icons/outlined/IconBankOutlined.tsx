// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BankOutlinedSvg from 'icons-base/es/asn/BankOutlined';

export interface BankOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBankOutlined: BankOutlinedIconType = (props, context) => <Icon name='BankOutlined' {...{ ...props, ...context.attrs }} icon={BankOutlinedSvg} />;

IconBankOutlined.displayName = 'IconBankOutlined';
IconBankOutlined.theme = 'outlined';
IconBankOutlined.originName = 'bank';

export default IconBankOutlined;
