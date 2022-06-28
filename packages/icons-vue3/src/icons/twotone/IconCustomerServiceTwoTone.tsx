// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CustomerServiceTwotoneSvg from 'gupo-icons-base/es/asn/CustomerServiceTwotone';

export interface CustomerServiceTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCustomerServiceTwotone: CustomerServiceTwotoneIconType = (props, context) => (
    <Icon name='CustomerServiceTwotone' {...{ ...props, ...context.attrs }} icon={CustomerServiceTwotoneSvg} />
);

IconCustomerServiceTwotone.displayName = 'IconCustomerServiceTwotone';
IconCustomerServiceTwotone.theme = 'twotone';
IconCustomerServiceTwotone.originName = 'customer-service';

export default IconCustomerServiceTwotone;
