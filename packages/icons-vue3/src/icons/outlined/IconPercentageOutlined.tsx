// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PercentageOutlinedSvg from 'gupo-icons-base/es/asn/PercentageOutlined';

export interface PercentageOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPercentageOutlined: PercentageOutlinedIconType = (props, context) => (
    <Icon name='PercentageOutlined' {...{ ...props, ...context.attrs }} icon={PercentageOutlinedSvg} />
);

IconPercentageOutlined.displayName = 'IconPercentageOutlined';
IconPercentageOutlined.theme = 'outlined';
IconPercentageOutlined.originName = 'percentage';

export default IconPercentageOutlined;
