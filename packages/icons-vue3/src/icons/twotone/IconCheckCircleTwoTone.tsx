// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CheckCircleTwotoneSvg from 'icons-base/es/asn/CheckCircleTwotone';

export interface CheckCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCheckCircleTwotone: CheckCircleTwotoneIconType = (props, context) => (
    <Icon name='CheckCircleTwotone' {...{ ...props, ...context.attrs }} icon={CheckCircleTwotoneSvg} />
);

IconCheckCircleTwotone.displayName = 'IconCheckCircleTwotone';
IconCheckCircleTwotone.theme = 'twotone';
IconCheckCircleTwotone.originName = 'check-circle';

export default IconCheckCircleTwotone;
