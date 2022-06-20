// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CalculatorTwoToneSvg from 'icon-base/es/asn/CalculatorTwoTone';

export interface CalculatorTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCalculatorTwoTone: CalculatorTwoToneIconType = (props, context) => (
    <Icon name='CalculatorTwoTone' {...{ ...props, ...context.attrs }} icon={CalculatorTwoToneSvg} />
);

IconCalculatorTwoTone.displayName = 'IconCalculatorTwoTone';

export default IconCalculatorTwoTone;
