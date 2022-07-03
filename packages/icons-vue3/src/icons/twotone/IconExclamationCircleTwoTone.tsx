// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExclamationCircleTwotoneSvg from 'icons-base/es/asn/ExclamationCircleTwotone';

export interface ExclamationCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconExclamationCircleTwotone: ExclamationCircleTwotoneIconType = (props, context) => (
    <Icon name='ExclamationCircleTwotone' {...{ ...props, ...context.attrs }} icon={ExclamationCircleTwotoneSvg} />
);

IconExclamationCircleTwotone.displayName = 'IconExclamationCircleTwotone';
IconExclamationCircleTwotone.theme = 'twotone';
IconExclamationCircleTwotone.originName = 'exclamation-circle';

export default IconExclamationCircleTwotone;
