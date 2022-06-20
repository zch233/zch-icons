// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PhoneOutlinedSvg from 'icon-base/es/asn/PhoneOutlined';

export interface PhoneOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPhoneOutlined: PhoneOutlinedIconType = (props, context) => <Icon name='PhoneOutlined' {...{ ...props, ...context.attrs }} icon={PhoneOutlinedSvg} />;

IconPhoneOutlined.displayName = 'IconPhoneOutlined';

export default IconPhoneOutlined;
