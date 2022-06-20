// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VerticalAlignBottomOutlinedSvg from 'icon-base/es/asn/VerticalAlignBottomOutlined';

export interface VerticalAlignBottomOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconVerticalAlignBottomOutlined: VerticalAlignBottomOutlinedIconType = (props, context) => (
    <Icon name='VerticalAlignBottomOutlined' {...{ ...props, ...context.attrs }} icon={VerticalAlignBottomOutlinedSvg} />
);

IconVerticalAlignBottomOutlined.displayName = 'IconVerticalAlignBottomOutlined';

export default IconVerticalAlignBottomOutlined;
