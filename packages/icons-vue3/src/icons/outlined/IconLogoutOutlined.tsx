// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LogoutOutlinedSvg from 'gupo-icons-base/es/asn/LogoutOutlined';

export interface LogoutOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLogoutOutlined: LogoutOutlinedIconType = (props, context) => (
    <Icon name='LogoutOutlined' {...{ ...props, ...context.attrs }} icon={LogoutOutlinedSvg} />
);

IconLogoutOutlined.displayName = 'IconLogoutOutlined';
IconLogoutOutlined.theme = 'outlined';
IconLogoutOutlined.originName = 'logout';

export default IconLogoutOutlined;
