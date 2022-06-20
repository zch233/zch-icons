// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BarChartOutlinedSvg from 'icon-base/es/asn/BarChartOutlined';

export interface BarChartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBarChartOutlined: BarChartOutlinedIconType = (props, context) => (
    <Icon name='BarChartOutlined' {...{ ...props, ...context.attrs }} icon={BarChartOutlinedSvg} />
);

IconBarChartOutlined.displayName = 'IconBarChartOutlined';

export default IconBarChartOutlined;
