// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UsbTwotoneSvg from 'icons-base/es/asn/UsbTwotone';

export interface UsbTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUsbTwotone: UsbTwotoneIconType = (props, context) => <Icon name='UsbTwotone' {...{ ...props, ...context.attrs }} icon={UsbTwotoneSvg} />;

IconUsbTwotone.displayName = 'IconUsbTwotone';
IconUsbTwotone.theme = 'twotone';
IconUsbTwotone.originName = 'usb';

export default IconUsbTwotone;
