// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PieChartFilledSvg from 'icons-base/es/asn/PieChartFilled';

export interface PieChartFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPieChartFilled: PieChartFilledIconType = (props, context) => (
    <Icon name='PieChartFilled' {...{ ...props, ...context.attrs }} icon={PieChartFilledSvg} />
);

IconPieChartFilled.displayName = 'IconPieChartFilled';
IconPieChartFilled.theme = 'filled';
IconPieChartFilled.originName = 'pie-chart';

export default IconPieChartFilled;
