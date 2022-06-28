// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExceptionOutlinedSvg from 'gupo-icons-base/es/asn/ExceptionOutlined';

export interface ExceptionOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconExceptionOutlined: ExceptionOutlinedIconType = (props, context) => (
    <Icon name='ExceptionOutlined' {...{ ...props, ...context.attrs }} icon={ExceptionOutlinedSvg} />
);

IconExceptionOutlined.displayName = 'IconExceptionOutlined';
IconExceptionOutlined.theme = 'outlined';
IconExceptionOutlined.originName = 'exception';

export default IconExceptionOutlined;
