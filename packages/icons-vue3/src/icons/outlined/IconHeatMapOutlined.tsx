// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HeatMapOutlinedSvg from 'icons-base/es/asn/HeatMapOutlined';

export interface HeatMapOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHeatMapOutlined: HeatMapOutlinedIconType = (props, context) => (
    <Icon name='HeatMapOutlined' {...{ ...props, ...context.attrs }} icon={HeatMapOutlinedSvg} />
);

IconHeatMapOutlined.displayName = 'IconHeatMapOutlined';
IconHeatMapOutlined.theme = 'outlined';
IconHeatMapOutlined.originName = 'heat-map';

export default IconHeatMapOutlined;
