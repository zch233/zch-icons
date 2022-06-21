// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CalculatorOutlinedSvg from 'icon-base/es/asn/CalculatorOutlined';

export interface CalculatorOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCalculatorOutlined: CalculatorOutlinedIconType = (props, context) => (
    <Icon name='CalculatorOutlined' {...{ ...props, ...context.attrs }} icon={CalculatorOutlinedSvg} />
);

IconCalculatorOutlined.displayName = 'IconCalculatorOutlined';

export default IconCalculatorOutlined;