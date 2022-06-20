// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import OrderedListOutlinedSvg from 'icon-base/es/asn/OrderedListOutlined';

export interface OrderedListOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconOrderedListOutlined: OrderedListOutlinedIconType = (props, context) => (
    <Icon name='OrderedListOutlined' {...{ ...props, ...context.attrs }} icon={OrderedListOutlinedSvg} />
);

IconOrderedListOutlined.displayName = 'IconOrderedListOutlined';

export default IconOrderedListOutlined;
