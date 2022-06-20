// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WhatsAppOutlinedSvg from 'icon-base/es/asn/WhatsAppOutlined';

export interface WhatsAppOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconWhatsAppOutlined: WhatsAppOutlinedIconType = (props, context) => (
    <Icon name='WhatsAppOutlined' {...{ ...props, ...context.attrs }} icon={WhatsAppOutlinedSvg} />
);

IconWhatsAppOutlined.displayName = 'IconWhatsAppOutlined';

export default IconWhatsAppOutlined;
