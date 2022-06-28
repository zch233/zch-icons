// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VerticalAlignBottomOutlinedSvg from 'gupo-icons-base/es/asn/VerticalAlignBottomOutlined';

export interface VerticalAlignBottomOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconVerticalAlignBottomOutlined: VerticalAlignBottomOutlinedIconType = (props, context) => (
    <Icon name='VerticalAlignBottomOutlined' {...{ ...props, ...context.attrs }} icon={VerticalAlignBottomOutlinedSvg} />
);

IconVerticalAlignBottomOutlined.displayName = 'IconVerticalAlignBottomOutlined';
IconVerticalAlignBottomOutlined.theme = 'outlined';
IconVerticalAlignBottomOutlined.originName = 'vertical-align-bottom';

export default IconVerticalAlignBottomOutlined;
