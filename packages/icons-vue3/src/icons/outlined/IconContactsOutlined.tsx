// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ContactsOutlinedSvg from 'icons-base/es/asn/ContactsOutlined';

export interface ContactsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconContactsOutlined: ContactsOutlinedIconType = (props, context) => (
    <Icon name='ContactsOutlined' {...{ ...props, ...context.attrs }} icon={ContactsOutlinedSvg} />
);

IconContactsOutlined.displayName = 'IconContactsOutlined';
IconContactsOutlined.theme = 'outlined';
IconContactsOutlined.originName = 'contacts';

export default IconContactsOutlined;
