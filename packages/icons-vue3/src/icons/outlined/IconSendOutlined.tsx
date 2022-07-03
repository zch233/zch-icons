// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SendOutlinedSvg from 'icons-base/es/asn/SendOutlined';

export interface SendOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSendOutlined: SendOutlinedIconType = (props, context) => <Icon name='SendOutlined' {...{ ...props, ...context.attrs }} icon={SendOutlinedSvg} />;

IconSendOutlined.displayName = 'IconSendOutlined';
IconSendOutlined.theme = 'outlined';
IconSendOutlined.originName = 'send';

export default IconSendOutlined;
