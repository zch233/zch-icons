// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BoxPlotOutlinedSvg from 'icon-base/es/asn/BoxPlotOutlined';

export interface BoxPlotOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBoxPlotOutlined: BoxPlotOutlinedIconType = (props, context) => (
    <Icon name='BoxPlotOutlined' {...{ ...props, ...context.attrs }} icon={BoxPlotOutlinedSvg} />
);

IconBoxPlotOutlined.displayName = 'IconBoxPlotOutlined';

export default IconBoxPlotOutlined;
