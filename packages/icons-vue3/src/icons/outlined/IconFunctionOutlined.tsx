// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FunctionOutlinedSvg from 'icons-base/es/asn/FunctionOutlined';

export interface FunctionOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFunctionOutlined: FunctionOutlinedIconType = (props, context) => (
    <Icon name='FunctionOutlined' {...{ ...props, ...context.attrs }} icon={FunctionOutlinedSvg} />
);

IconFunctionOutlined.displayName = 'IconFunctionOutlined';
IconFunctionOutlined.theme = 'outlined';
IconFunctionOutlined.originName = 'function';

export default IconFunctionOutlined;
