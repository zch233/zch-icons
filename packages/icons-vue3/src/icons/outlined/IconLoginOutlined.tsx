// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LoginOutlinedSvg from 'icons-base/es/asn/LoginOutlined';

export interface LoginOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLoginOutlined: LoginOutlinedIconType = (props, context) => <Icon name='LoginOutlined' {...{ ...props, ...context.attrs }} icon={LoginOutlinedSvg} />;

IconLoginOutlined.displayName = 'IconLoginOutlined';
IconLoginOutlined.theme = 'outlined';
IconLoginOutlined.originName = 'login';

export default IconLoginOutlined;
