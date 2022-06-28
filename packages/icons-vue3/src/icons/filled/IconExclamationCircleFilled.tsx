// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExclamationCircleFilledSvg from 'gupo-icons-base/es/asn/ExclamationCircleFilled';

export interface ExclamationCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconExclamationCircleFilled: ExclamationCircleFilledIconType = (props, context) => (
    <Icon name='ExclamationCircleFilled' {...{ ...props, ...context.attrs }} icon={ExclamationCircleFilledSvg} />
);

IconExclamationCircleFilled.displayName = 'IconExclamationCircleFilled';
IconExclamationCircleFilled.theme = 'filled';
IconExclamationCircleFilled.originName = 'exclamation-circle';

export default IconExclamationCircleFilled;
