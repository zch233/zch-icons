// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AreaChartOutlinedSvg from 'gupo-icons-base/es/asn/AreaChartOutlined';

export interface AreaChartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAreaChartOutlined: AreaChartOutlinedIconType = (props, context) => (
    <Icon name='AreaChartOutlined' {...{ ...props, ...context.attrs }} icon={AreaChartOutlinedSvg} />
);

IconAreaChartOutlined.displayName = 'IconAreaChartOutlined';
IconAreaChartOutlined.theme = 'outlined';
IconAreaChartOutlined.originName = 'area-chart';

export default IconAreaChartOutlined;
