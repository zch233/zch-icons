// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UsbOutlinedSvg from 'icons-base/es/asn/UsbOutlined';

export interface UsbOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUsbOutlined: UsbOutlinedIconType = (props, context) => <Icon name='UsbOutlined' {...{ ...props, ...context.attrs }} icon={UsbOutlinedSvg} />;

IconUsbOutlined.displayName = 'IconUsbOutlined';
IconUsbOutlined.theme = 'outlined';
IconUsbOutlined.originName = 'usb';

export default IconUsbOutlined;
