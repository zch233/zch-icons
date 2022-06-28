// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PhoneFilledSvg from 'gupo-icons-base/es/asn/PhoneFilled';

export interface PhoneFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPhoneFilled: PhoneFilledIconType = (props, context) => <Icon name='PhoneFilled' {...{ ...props, ...context.attrs }} icon={PhoneFilledSvg} />;

IconPhoneFilled.displayName = 'IconPhoneFilled';
IconPhoneFilled.theme = 'filled';
IconPhoneFilled.originName = 'phone';

export default IconPhoneFilled;
