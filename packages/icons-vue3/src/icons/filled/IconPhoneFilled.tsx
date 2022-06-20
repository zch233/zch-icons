// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PhoneFilledSvg from 'icon-base/es/asn/PhoneFilled';

export interface PhoneFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPhoneFilled: PhoneFilledIconType = (props, context) => <Icon name='PhoneFilled' {...{ ...props, ...context.attrs }} icon={PhoneFilledSvg} />;

IconPhoneFilled.displayName = 'IconPhoneFilled';

export default IconPhoneFilled;
