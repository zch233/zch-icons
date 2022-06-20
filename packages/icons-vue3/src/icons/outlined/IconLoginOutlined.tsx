// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LoginOutlinedSvg from 'icon-base/es/asn/LoginOutlined';

export interface LoginOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLoginOutlined: LoginOutlinedIconType = (props, context) => <Icon name='LoginOutlined' {...{ ...props, ...context.attrs }} icon={LoginOutlinedSvg} />;

IconLoginOutlined.displayName = 'IconLoginOutlined';

export default IconLoginOutlined;
