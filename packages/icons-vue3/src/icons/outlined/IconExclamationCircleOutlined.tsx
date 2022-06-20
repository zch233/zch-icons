// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExclamationCircleOutlinedSvg from 'icon-base/es/asn/ExclamationCircleOutlined';

export interface ExclamationCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconExclamationCircleOutlined: ExclamationCircleOutlinedIconType = (props, context) => (
    <Icon name='ExclamationCircleOutlined' {...{ ...props, ...context.attrs }} icon={ExclamationCircleOutlinedSvg} />
);

IconExclamationCircleOutlined.displayName = 'IconExclamationCircleOutlined';

export default IconExclamationCircleOutlined;
