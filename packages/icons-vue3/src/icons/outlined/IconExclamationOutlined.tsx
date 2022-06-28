// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExclamationOutlinedSvg from 'gupo-icons-base/es/asn/ExclamationOutlined';

export interface ExclamationOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconExclamationOutlined: ExclamationOutlinedIconType = (props, context) => (
    <Icon name='ExclamationOutlined' {...{ ...props, ...context.attrs }} icon={ExclamationOutlinedSvg} />
);

IconExclamationOutlined.displayName = 'IconExclamationOutlined';
IconExclamationOutlined.theme = 'outlined';
IconExclamationOutlined.originName = 'exclamation';

export default IconExclamationOutlined;
