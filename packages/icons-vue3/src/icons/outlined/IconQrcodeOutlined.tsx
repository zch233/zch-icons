// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import QrcodeOutlinedSvg from 'gupo-icons-base/es/asn/QrcodeOutlined';

export interface QrcodeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconQrcodeOutlined: QrcodeOutlinedIconType = (props, context) => (
    <Icon name='QrcodeOutlined' {...{ ...props, ...context.attrs }} icon={QrcodeOutlinedSvg} />
);

IconQrcodeOutlined.displayName = 'IconQrcodeOutlined';
IconQrcodeOutlined.theme = 'outlined';
IconQrcodeOutlined.originName = 'qrcode';

export default IconQrcodeOutlined;
