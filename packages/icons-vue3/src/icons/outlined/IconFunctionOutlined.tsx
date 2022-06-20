// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FunctionOutlinedSvg from 'icon-base/es/asn/FunctionOutlined';

export interface FunctionOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFunctionOutlined: FunctionOutlinedIconType = (props, context) => (
    <Icon name='FunctionOutlined' {...{ ...props, ...context.attrs }} icon={FunctionOutlinedSvg} />
);

IconFunctionOutlined.displayName = 'IconFunctionOutlined';

export default IconFunctionOutlined;
