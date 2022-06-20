// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExceptionOutlinedSvg from 'icon-base/es/asn/ExceptionOutlined';

export interface ExceptionOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconExceptionOutlined: ExceptionOutlinedIconType = (props, context) => (
    <Icon name='ExceptionOutlined' {...{ ...props, ...context.attrs }} icon={ExceptionOutlinedSvg} />
);

IconExceptionOutlined.displayName = 'IconExceptionOutlined';

export default IconExceptionOutlined;
