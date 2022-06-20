// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UserSwitchOutlinedSvg from 'icon-base/es/asn/UserSwitchOutlined';

export interface UserSwitchOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconUserSwitchOutlined: UserSwitchOutlinedIconType = (props, context) => (
    <Icon name='UserSwitchOutlined' {...{ ...props, ...context.attrs }} icon={UserSwitchOutlinedSvg} />
);

IconUserSwitchOutlined.displayName = 'IconUserSwitchOutlined';

export default IconUserSwitchOutlined;
