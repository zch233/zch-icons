// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HeatMapOutlinedSvg from 'icon-base/es/asn/HeatMapOutlined';

export interface HeatMapOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHeatMapOutlined: HeatMapOutlinedIconType = (props, context) => (
    <Icon name='HeatMapOutlined' {...{ ...props, ...context.attrs }} icon={HeatMapOutlinedSvg} />
);

IconHeatMapOutlined.displayName = 'IconHeatMapOutlined';

export default IconHeatMapOutlined;
