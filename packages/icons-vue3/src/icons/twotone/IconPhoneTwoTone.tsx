// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PhoneTwoToneSvg from 'icon-base/es/asn/PhoneTwoTone';

export interface PhoneTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPhoneTwoTone: PhoneTwoToneIconType = (props, context) => <Icon name='PhoneTwoTone' {...{ ...props, ...context.attrs }} icon={PhoneTwoToneSvg} />;

IconPhoneTwoTone.displayName = 'IconPhoneTwoTone';

export default IconPhoneTwoTone;
