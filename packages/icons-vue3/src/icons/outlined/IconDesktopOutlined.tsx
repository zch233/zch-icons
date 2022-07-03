// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DesktopOutlinedSvg from 'icons-base/es/asn/DesktopOutlined';

export interface DesktopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDesktopOutlined: DesktopOutlinedIconType = (props, context) => (
    <Icon name='DesktopOutlined' {...{ ...props, ...context.attrs }} icon={DesktopOutlinedSvg} />
);

IconDesktopOutlined.displayName = 'IconDesktopOutlined';
IconDesktopOutlined.theme = 'outlined';
IconDesktopOutlined.originName = 'desktop';

export default IconDesktopOutlined;
