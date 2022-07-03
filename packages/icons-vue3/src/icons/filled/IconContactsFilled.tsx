// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ContactsFilledSvg from 'icons-base/es/asn/ContactsFilled';

export interface ContactsFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconContactsFilled: ContactsFilledIconType = (props, context) => (
    <Icon name='ContactsFilled' {...{ ...props, ...context.attrs }} icon={ContactsFilledSvg} />
);

IconContactsFilled.displayName = 'IconContactsFilled';
IconContactsFilled.theme = 'filled';
IconContactsFilled.originName = 'contacts';

export default IconContactsFilled;
