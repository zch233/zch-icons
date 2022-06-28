// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UserDeleteOutlinedSvg from 'gupo-icons-base/es/asn/UserDeleteOutlined';

export interface UserDeleteOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUserDeleteOutlined: UserDeleteOutlinedIconType = (props, context) => (
    <Icon name='UserDeleteOutlined' {...{ ...props, ...context.attrs }} icon={UserDeleteOutlinedSvg} />
);

IconUserDeleteOutlined.displayName = 'IconUserDeleteOutlined';
IconUserDeleteOutlined.theme = 'outlined';
IconUserDeleteOutlined.originName = 'user-delete';

export default IconUserDeleteOutlined;
