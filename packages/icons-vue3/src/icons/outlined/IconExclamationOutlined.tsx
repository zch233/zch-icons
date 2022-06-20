// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExclamationOutlinedSvg from 'icon-base/es/asn/ExclamationOutlined';

export interface ExclamationOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconExclamationOutlined: ExclamationOutlinedIconType = (props, context) => (
    <Icon name='ExclamationOutlined' {...{ ...props, ...context.attrs }} icon={ExclamationOutlinedSvg} />
);

IconExclamationOutlined.displayName = 'IconExclamationOutlined';

export default IconExclamationOutlined;
