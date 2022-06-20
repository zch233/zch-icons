// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ContactsFilledSvg from 'icon-base/es/asn/ContactsFilled';

export interface ContactsFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconContactsFilled: ContactsFilledIconType = (props, context) => (
    <Icon name='ContactsFilled' {...{ ...props, ...context.attrs }} icon={ContactsFilledSvg} />
);

IconContactsFilled.displayName = 'IconContactsFilled';

export default IconContactsFilled;
