// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PhoneOutlinedSvg from 'icons-base/es/asn/PhoneOutlined';

export interface PhoneOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPhoneOutlined: PhoneOutlinedIconType = (props, context) => <Icon name='PhoneOutlined' {...{ ...props, ...context.attrs }} icon={PhoneOutlinedSvg} />;

IconPhoneOutlined.displayName = 'IconPhoneOutlined';
IconPhoneOutlined.theme = 'outlined';
IconPhoneOutlined.originName = 'phone';

export default IconPhoneOutlined;
