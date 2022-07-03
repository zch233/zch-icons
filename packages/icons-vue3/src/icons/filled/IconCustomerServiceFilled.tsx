// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CustomerServiceFilledSvg from 'icons-base/es/asn/CustomerServiceFilled';

export interface CustomerServiceFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCustomerServiceFilled: CustomerServiceFilledIconType = (props, context) => (
    <Icon name='CustomerServiceFilled' {...{ ...props, ...context.attrs }} icon={CustomerServiceFilledSvg} />
);

IconCustomerServiceFilled.displayName = 'IconCustomerServiceFilled';
IconCustomerServiceFilled.theme = 'filled';
IconCustomerServiceFilled.originName = 'customer-service';

export default IconCustomerServiceFilled;
