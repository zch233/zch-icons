// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CalculatorFilledSvg from 'gupo-icons-base/es/asn/CalculatorFilled';

export interface CalculatorFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCalculatorFilled: CalculatorFilledIconType = (props, context) => (
    <Icon name='CalculatorFilled' {...{ ...props, ...context.attrs }} icon={CalculatorFilledSvg} />
);

IconCalculatorFilled.displayName = 'IconCalculatorFilled';
IconCalculatorFilled.theme = 'filled';
IconCalculatorFilled.originName = 'calculator';

export default IconCalculatorFilled;
