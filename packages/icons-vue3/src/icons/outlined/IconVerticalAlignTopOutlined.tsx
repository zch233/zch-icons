// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VerticalAlignTopOutlinedSvg from 'gupo-icons-base/es/asn/VerticalAlignTopOutlined';

export interface VerticalAlignTopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconVerticalAlignTopOutlined: VerticalAlignTopOutlinedIconType = (props, context) => (
    <Icon name='VerticalAlignTopOutlined' {...{ ...props, ...context.attrs }} icon={VerticalAlignTopOutlinedSvg} />
);

IconVerticalAlignTopOutlined.displayName = 'IconVerticalAlignTopOutlined';
IconVerticalAlignTopOutlined.theme = 'outlined';
IconVerticalAlignTopOutlined.originName = 'vertical-align-top';

export default IconVerticalAlignTopOutlined;
