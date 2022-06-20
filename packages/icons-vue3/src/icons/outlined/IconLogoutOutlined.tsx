// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LogoutOutlinedSvg from 'icon-base/es/asn/LogoutOutlined';

export interface LogoutOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLogoutOutlined: LogoutOutlinedIconType = (props, context) => (
    <Icon name='LogoutOutlined' {...{ ...props, ...context.attrs }} icon={LogoutOutlinedSvg} />
);

IconLogoutOutlined.displayName = 'IconLogoutOutlined';

export default IconLogoutOutlined;
