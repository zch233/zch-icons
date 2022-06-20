// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExclamationCircleFilledSvg from 'icon-base/es/asn/ExclamationCircleFilled';

export interface ExclamationCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconExclamationCircleFilled: ExclamationCircleFilledIconType = (props, context) => (
    <Icon name='ExclamationCircleFilled' {...{ ...props, ...context.attrs }} icon={ExclamationCircleFilledSvg} />
);

IconExclamationCircleFilled.displayName = 'IconExclamationCircleFilled';

export default IconExclamationCircleFilled;
