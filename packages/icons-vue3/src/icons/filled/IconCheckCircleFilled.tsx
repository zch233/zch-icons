// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CheckCircleFilledSvg from 'icons-base/es/asn/CheckCircleFilled';

export interface CheckCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCheckCircleFilled: CheckCircleFilledIconType = (props, context) => (
    <Icon name='CheckCircleFilled' {...{ ...props, ...context.attrs }} icon={CheckCircleFilledSvg} />
);

IconCheckCircleFilled.displayName = 'IconCheckCircleFilled';
IconCheckCircleFilled.theme = 'filled';
IconCheckCircleFilled.originName = 'check-circle';

export default IconCheckCircleFilled;
