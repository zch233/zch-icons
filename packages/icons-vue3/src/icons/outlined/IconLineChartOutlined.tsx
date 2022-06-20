// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LineChartOutlinedSvg from 'icon-base/es/asn/LineChartOutlined';

export interface LineChartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLineChartOutlined: LineChartOutlinedIconType = (props, context) => (
    <Icon name='LineChartOutlined' {...{ ...props, ...context.attrs }} icon={LineChartOutlinedSvg} />
);

IconLineChartOutlined.displayName = 'IconLineChartOutlined';

export default IconLineChartOutlined;
