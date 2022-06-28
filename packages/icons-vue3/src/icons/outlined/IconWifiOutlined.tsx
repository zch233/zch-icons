// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WifiOutlinedSvg from 'gupo-icons-base/es/asn/WifiOutlined';

export interface WifiOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWifiOutlined: WifiOutlinedIconType = (props, context) => <Icon name='WifiOutlined' {...{ ...props, ...context.attrs }} icon={WifiOutlinedSvg} />;

IconWifiOutlined.displayName = 'IconWifiOutlined';
IconWifiOutlined.theme = 'outlined';
IconWifiOutlined.originName = 'wifi';

export default IconWifiOutlined;
