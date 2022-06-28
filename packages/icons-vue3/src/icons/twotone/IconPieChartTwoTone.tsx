// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PieChartTwotoneSvg from 'gupo-icons-base/es/asn/PieChartTwotone';

export interface PieChartTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPieChartTwotone: PieChartTwotoneIconType = (props, context) => (
    <Icon name='PieChartTwotone' {...{ ...props, ...context.attrs }} icon={PieChartTwotoneSvg} />
);

IconPieChartTwotone.displayName = 'IconPieChartTwotone';
IconPieChartTwotone.theme = 'twotone';
IconPieChartTwotone.originName = 'pie-chart';

export default IconPieChartTwotone;
