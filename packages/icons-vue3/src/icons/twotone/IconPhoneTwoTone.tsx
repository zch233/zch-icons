// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PhoneTwotoneSvg from 'icons-base/es/asn/PhoneTwotone';

export interface PhoneTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPhoneTwotone: PhoneTwotoneIconType = (props, context) => <Icon name='PhoneTwotone' {...{ ...props, ...context.attrs }} icon={PhoneTwotoneSvg} />;

IconPhoneTwotone.displayName = 'IconPhoneTwotone';
IconPhoneTwotone.theme = 'twotone';
IconPhoneTwotone.originName = 'phone';

export default IconPhoneTwotone;
