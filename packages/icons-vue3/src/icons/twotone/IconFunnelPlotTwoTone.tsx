// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FunnelPlotTwotoneSvg from 'gupo-icons-base/es/asn/FunnelPlotTwotone';

export interface FunnelPlotTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFunnelPlotTwotone: FunnelPlotTwotoneIconType = (props, context) => (
    <Icon name='FunnelPlotTwotone' {...{ ...props, ...context.attrs }} icon={FunnelPlotTwotoneSvg} />
);

IconFunnelPlotTwotone.displayName = 'IconFunnelPlotTwotone';
IconFunnelPlotTwotone.theme = 'twotone';
IconFunnelPlotTwotone.originName = 'funnel-plot';

export default IconFunnelPlotTwotone;
