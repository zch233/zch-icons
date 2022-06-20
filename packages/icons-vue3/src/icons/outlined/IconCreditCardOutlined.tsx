// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CreditCardOutlinedSvg from 'icon-base/es/asn/CreditCardOutlined';

export interface CreditCardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCreditCardOutlined: CreditCardOutlinedIconType = (props, context) => (
    <Icon name='CreditCardOutlined' {...{ ...props, ...context.attrs }} icon={CreditCardOutlinedSvg} />
);

IconCreditCardOutlined.displayName = 'IconCreditCardOutlined';

export default IconCreditCardOutlined;
