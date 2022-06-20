// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BoxPlotTwoToneSvg from 'icon-base/es/asn/BoxPlotTwoTone';

export interface BoxPlotTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBoxPlotTwoTone: BoxPlotTwoToneIconType = (props, context) => (
    <Icon name='BoxPlotTwoTone' {...{ ...props, ...context.attrs }} icon={BoxPlotTwoToneSvg} />
);

IconBoxPlotTwoTone.displayName = 'IconBoxPlotTwoTone';

export default IconBoxPlotTwoTone;
