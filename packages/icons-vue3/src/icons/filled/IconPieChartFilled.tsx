// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PieChartFilledSvg from 'icon-base/es/asn/PieChartFilled';

export interface PieChartFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPieChartFilled: PieChartFilledIconType = (props, context) => (
    <Icon name='PieChartFilled' {...{ ...props, ...context.attrs }} icon={PieChartFilledSvg} />
);

IconPieChartFilled.displayName = 'IconPieChartFilled';

export default IconPieChartFilled;
