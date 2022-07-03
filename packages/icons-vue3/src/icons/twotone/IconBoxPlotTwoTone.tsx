// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BoxPlotTwotoneSvg from 'icons-base/es/asn/BoxPlotTwotone';

export interface BoxPlotTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBoxPlotTwotone: BoxPlotTwotoneIconType = (props, context) => (
    <Icon name='BoxPlotTwotone' {...{ ...props, ...context.attrs }} icon={BoxPlotTwotoneSvg} />
);

IconBoxPlotTwotone.displayName = 'IconBoxPlotTwotone';
IconBoxPlotTwotone.theme = 'twotone';
IconBoxPlotTwotone.originName = 'box-plot';

export default IconBoxPlotTwotone;
