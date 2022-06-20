// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DollarCircleFilledSvg from 'icon-base/es/asn/DollarCircleFilled';

export interface DollarCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDollarCircleFilled: DollarCircleFilledIconType = (props, context) => (
    <Icon name='DollarCircleFilled' {...{ ...props, ...context.attrs }} icon={DollarCircleFilledSvg} />
);

IconDollarCircleFilled.displayName = 'IconDollarCircleFilled';

export default IconDollarCircleFilled;
