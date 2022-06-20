// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ContactsTwoToneSvg from 'icon-base/es/asn/ContactsTwoTone';

export interface ContactsTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconContactsTwoTone: ContactsTwoToneIconType = (props, context) => (
    <Icon name='ContactsTwoTone' {...{ ...props, ...context.attrs }} icon={ContactsTwoToneSvg} />
);

IconContactsTwoTone.displayName = 'IconContactsTwoTone';

export default IconContactsTwoTone;
