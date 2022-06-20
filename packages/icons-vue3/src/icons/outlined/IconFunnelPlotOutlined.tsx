// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FunnelPlotOutlinedSvg from 'icon-base/es/asn/FunnelPlotOutlined';

export interface FunnelPlotOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFunnelPlotOutlined: FunnelPlotOutlinedIconType = (props, context) => (
    <Icon name='FunnelPlotOutlined' {...{ ...props, ...context.attrs }} icon={FunnelPlotOutlinedSvg} />
);

IconFunnelPlotOutlined.displayName = 'IconFunnelPlotOutlined';

export default IconFunnelPlotOutlined;
