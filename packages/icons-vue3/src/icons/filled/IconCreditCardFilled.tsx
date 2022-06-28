// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CreditCardFilledSvg from 'gupo-icons-base/es/asn/CreditCardFilled';

export interface CreditCardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCreditCardFilled: CreditCardFilledIconType = (props, context) => (
    <Icon name='CreditCardFilled' {...{ ...props, ...context.attrs }} icon={CreditCardFilledSvg} />
);

IconCreditCardFilled.displayName = 'IconCreditCardFilled';
IconCreditCardFilled.theme = 'filled';
IconCreditCardFilled.originName = 'credit-card';

export default IconCreditCardFilled;
