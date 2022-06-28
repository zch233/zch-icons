// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ScissorOutlinedSvg from 'gupo-icons-base/es/asn/ScissorOutlined';

export interface ScissorOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconScissorOutlined: ScissorOutlinedIconType = (props, context) => (
    <Icon name='ScissorOutlined' {...{ ...props, ...context.attrs }} icon={ScissorOutlinedSvg} />
);

IconScissorOutlined.displayName = 'IconScissorOutlined';
IconScissorOutlined.theme = 'outlined';
IconScissorOutlined.originName = 'scissor';

export default IconScissorOutlined;
