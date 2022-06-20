// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ContactsOutlinedSvg from 'icon-base/es/asn/ContactsOutlined';

export interface ContactsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconContactsOutlined: ContactsOutlinedIconType = (props, context) => (
    <Icon name='ContactsOutlined' {...{ ...props, ...context.attrs }} icon={ContactsOutlinedSvg} />
);

IconContactsOutlined.displayName = 'IconContactsOutlined';

export default IconContactsOutlined;
