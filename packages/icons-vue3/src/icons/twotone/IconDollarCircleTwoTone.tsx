// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DollarCircleTwotoneSvg from 'gupo-icons-base/es/asn/DollarCircleTwotone';

export interface DollarCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDollarCircleTwotone: DollarCircleTwotoneIconType = (props, context) => (
    <Icon name='DollarCircleTwotone' {...{ ...props, ...context.attrs }} icon={DollarCircleTwotoneSvg} />
);

IconDollarCircleTwotone.displayName = 'IconDollarCircleTwotone';
IconDollarCircleTwotone.theme = 'twotone';
IconDollarCircleTwotone.originName = 'dollar-circle';

export default IconDollarCircleTwotone;
