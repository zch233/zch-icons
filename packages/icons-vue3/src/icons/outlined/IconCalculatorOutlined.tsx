// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CalculatorOutlinedSvg from 'gupo-icons-base/es/asn/CalculatorOutlined';

export interface CalculatorOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCalculatorOutlined: CalculatorOutlinedIconType = (props, context) => (
    <Icon name='CalculatorOutlined' {...{ ...props, ...context.attrs }} icon={CalculatorOutlinedSvg} />
);

IconCalculatorOutlined.displayName = 'IconCalculatorOutlined';
IconCalculatorOutlined.theme = 'outlined';
IconCalculatorOutlined.originName = 'calculator';

export default IconCalculatorOutlined;
