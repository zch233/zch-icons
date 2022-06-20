// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FunnelPlotFilledSvg from 'icon-base/es/asn/FunnelPlotFilled';

export interface FunnelPlotFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFunnelPlotFilled: FunnelPlotFilledIconType = (props, context) => (
    <Icon name='FunnelPlotFilled' {...{ ...props, ...context.attrs }} icon={FunnelPlotFilledSvg} />
);

IconFunnelPlotFilled.displayName = 'IconFunnelPlotFilled';

export default IconFunnelPlotFilled;
