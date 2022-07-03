// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UserOutlinedSvg from 'icons-base/es/asn/UserOutlined';

export interface UserOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUserOutlined: UserOutlinedIconType = (props, context) => <Icon name='UserOutlined' {...{ ...props, ...context.attrs }} icon={UserOutlinedSvg} />;

IconUserOutlined.displayName = 'IconUserOutlined';
IconUserOutlined.theme = 'outlined';
IconUserOutlined.originName = 'user';

export default IconUserOutlined;
