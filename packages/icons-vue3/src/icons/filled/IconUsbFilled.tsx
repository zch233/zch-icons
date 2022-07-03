// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UsbFilledSvg from 'icons-base/es/asn/UsbFilled';

export interface UsbFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUsbFilled: UsbFilledIconType = (props, context) => <Icon name='UsbFilled' {...{ ...props, ...context.attrs }} icon={UsbFilledSvg} />;

IconUsbFilled.displayName = 'IconUsbFilled';
IconUsbFilled.theme = 'filled';
IconUsbFilled.originName = 'usb';

export default IconUsbFilled;
