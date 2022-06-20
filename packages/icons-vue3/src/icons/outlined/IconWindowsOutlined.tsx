// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WindowsOutlinedSvg from 'icon-base/es/asn/WindowsOutlined';

export interface WindowsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconWindowsOutlined: WindowsOutlinedIconType = (props, context) => (
    <Icon name='WindowsOutlined' {...{ ...props, ...context.attrs }} icon={WindowsOutlinedSvg} />
);

IconWindowsOutlined.displayName = 'IconWindowsOutlined';

export default IconWindowsOutlined;
