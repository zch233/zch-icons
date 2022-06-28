// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PieChartOutlinedSvg from 'gupo-icons-base/es/asn/PieChartOutlined';

export interface PieChartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPieChartOutlined: PieChartOutlinedIconType = (props, context) => (
    <Icon name='PieChartOutlined' {...{ ...props, ...context.attrs }} icon={PieChartOutlinedSvg} />
);

IconPieChartOutlined.displayName = 'IconPieChartOutlined';
IconPieChartOutlined.theme = 'outlined';
IconPieChartOutlined.originName = 'pie-chart';

export default IconPieChartOutlined;
