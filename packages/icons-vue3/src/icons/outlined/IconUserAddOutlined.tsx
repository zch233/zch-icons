// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UserAddOutlinedSvg from 'icons-base/es/asn/UserAddOutlined';

export interface UserAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUserAddOutlined: UserAddOutlinedIconType = (props, context) => (
    <Icon name='UserAddOutlined' {...{ ...props, ...context.attrs }} icon={UserAddOutlinedSvg} />
);

IconUserAddOutlined.displayName = 'IconUserAddOutlined';
IconUserAddOutlined.theme = 'outlined';
IconUserAddOutlined.originName = 'user-add';

export default IconUserAddOutlined;
