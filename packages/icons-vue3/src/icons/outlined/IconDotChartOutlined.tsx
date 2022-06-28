// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DotChartOutlinedSvg from 'gupo-icons-base/es/asn/DotChartOutlined';

export interface DotChartOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDotChartOutlined: DotChartOutlinedIconType = (props, context) => (
    <Icon name='DotChartOutlined' {...{ ...props, ...context.attrs }} icon={DotChartOutlinedSvg} />
);

IconDotChartOutlined.displayName = 'IconDotChartOutlined';
IconDotChartOutlined.theme = 'outlined';
IconDotChartOutlined.originName = 'dot-chart';

export default IconDotChartOutlined;
