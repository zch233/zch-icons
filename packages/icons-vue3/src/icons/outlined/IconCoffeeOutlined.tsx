// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CoffeeOutlinedSvg from 'icon-base/es/asn/CoffeeOutlined';

export interface CoffeeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCoffeeOutlined: CoffeeOutlinedIconType = (props, context) => (
    <Icon name='CoffeeOutlined' {...{ ...props, ...context.attrs }} icon={CoffeeOutlinedSvg} />
);

IconCoffeeOutlined.displayName = 'IconCoffeeOutlined';

export default IconCoffeeOutlined;