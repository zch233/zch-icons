// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CustomerServiceOutlinedSvg from 'icons-base/es/asn/CustomerServiceOutlined';

export interface CustomerServiceOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCustomerServiceOutlined: CustomerServiceOutlinedIconType = (props, context) => (
    <Icon name='CustomerServiceOutlined' {...{ ...props, ...context.attrs }} icon={CustomerServiceOutlinedSvg} />
);

IconCustomerServiceOutlined.displayName = 'IconCustomerServiceOutlined';
IconCustomerServiceOutlined.theme = 'outlined';
IconCustomerServiceOutlined.originName = 'customer-service';

export default IconCustomerServiceOutlined;
