// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ToolOutlinedSvg from 'icons-base/es/asn/ToolOutlined';

export interface ToolOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconToolOutlined: ToolOutlinedIconType = (props, context) => <Icon name='ToolOutlined' {...{ ...props, ...context.attrs }} icon={ToolOutlinedSvg} />;

IconToolOutlined.displayName = 'IconToolOutlined';
IconToolOutlined.theme = 'outlined';
IconToolOutlined.originName = 'tool';

export default IconToolOutlined;
