// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CreditCardTwotoneSvg from 'gupo-icons-base/es/asn/CreditCardTwotone';

export interface CreditCardTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCreditCardTwotone: CreditCardTwotoneIconType = (props, context) => (
    <Icon name='CreditCardTwotone' {...{ ...props, ...context.attrs }} icon={CreditCardTwotoneSvg} />
);

IconCreditCardTwotone.displayName = 'IconCreditCardTwotone';
IconCreditCardTwotone.theme = 'twotone';
IconCreditCardTwotone.originName = 'credit-card';

export default IconCreditCardTwotone;
