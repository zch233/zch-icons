// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ScissorOutlinedSvg from 'icon-base/es/asn/ScissorOutlined';

export interface ScissorOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconScissorOutlined: ScissorOutlinedIconType = (props, context) => (
    <Icon name='ScissorOutlined' {...{ ...props, ...context.attrs }} icon={ScissorOutlinedSvg} />
);

IconScissorOutlined.displayName = 'IconScissorOutlined';

export default IconScissorOutlined;
