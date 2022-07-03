// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BoxPlotFilledSvg from 'icons-base/es/asn/BoxPlotFilled';

export interface BoxPlotFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBoxPlotFilled: BoxPlotFilledIconType = (props, context) => <Icon name='BoxPlotFilled' {...{ ...props, ...context.attrs }} icon={BoxPlotFilledSvg} />;

IconBoxPlotFilled.displayName = 'IconBoxPlotFilled';
IconBoxPlotFilled.theme = 'filled';
IconBoxPlotFilled.originName = 'box-plot';

export default IconBoxPlotFilled;
