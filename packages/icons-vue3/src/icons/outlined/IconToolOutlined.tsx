// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ToolOutlinedSvg from 'icon-base/es/asn/ToolOutlined';

export interface ToolOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconToolOutlined: ToolOutlinedIconType = (props, context) => <Icon name='ToolOutlined' {...{ ...props, ...context.attrs }} icon={ToolOutlinedSvg} />;

IconToolOutlined.displayName = 'IconToolOutlined';

export default IconToolOutlined;
