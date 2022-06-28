// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RadarChartOutlinedSvg from 'gupo-icons-base/es/asn/RadarChartOutlined';

export interface RadarChartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRadarChartOutlined: RadarChartOutlinedIconType = (props, context) => (
    <Icon name='RadarChartOutlined' {...{ ...props, ...context.attrs }} icon={RadarChartOutlinedSvg} />
);

IconRadarChartOutlined.displayName = 'IconRadarChartOutlined';
IconRadarChartOutlined.theme = 'outlined';
IconRadarChartOutlined.originName = 'radar-chart';

export default IconRadarChartOutlined;
