// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DollarCircleFilledSvg from 'gupo-icons-base/es/asn/DollarCircleFilled';

export interface DollarCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDollarCircleFilled: DollarCircleFilledIconType = (props, context) => (
    <Icon name='DollarCircleFilled' {...{ ...props, ...context.attrs }} icon={DollarCircleFilledSvg} />
);

IconDollarCircleFilled.displayName = 'IconDollarCircleFilled';
IconDollarCircleFilled.theme = 'filled';
IconDollarCircleFilled.originName = 'dollar-circle';

export default IconDollarCircleFilled;
