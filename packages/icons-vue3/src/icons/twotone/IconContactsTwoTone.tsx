// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ContactsTwotoneSvg from 'gupo-icons-base/es/asn/ContactsTwotone';

export interface ContactsTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconContactsTwotone: ContactsTwotoneIconType = (props, context) => (
    <Icon name='ContactsTwotone' {...{ ...props, ...context.attrs }} icon={ContactsTwotoneSvg} />
);

IconContactsTwotone.displayName = 'IconContactsTwotone';
IconContactsTwotone.theme = 'twotone';
IconContactsTwotone.originName = 'contacts';

export default IconContactsTwotone;
