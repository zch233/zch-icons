// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CalculatorTwotoneSvg from 'icons-base/es/asn/CalculatorTwotone';

export interface CalculatorTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCalculatorTwotone: CalculatorTwotoneIconType = (props, context) => (
    <Icon name='CalculatorTwotone' {...{ ...props, ...context.attrs }} icon={CalculatorTwotoneSvg} />
);

IconCalculatorTwotone.displayName = 'IconCalculatorTwotone';
IconCalculatorTwotone.theme = 'twotone';
IconCalculatorTwotone.originName = 'calculator';

export default IconCalculatorTwotone;
