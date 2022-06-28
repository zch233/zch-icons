// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WhatsAppOutlinedSvg from 'gupo-icons-base/es/asn/WhatsAppOutlined';

export interface WhatsAppOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWhatsAppOutlined: WhatsAppOutlinedIconType = (props, context) => (
    <Icon name='WhatsAppOutlined' {...{ ...props, ...context.attrs }} icon={WhatsAppOutlinedSvg} />
);

IconWhatsAppOutlined.displayName = 'IconWhatsAppOutlined';
IconWhatsAppOutlined.theme = 'outlined';
IconWhatsAppOutlined.originName = 'whats-app';

export default IconWhatsAppOutlined;
