// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BarcodeOutlinedSvg from 'icons-base/es/asn/BarcodeOutlined';

export interface BarcodeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBarcodeOutlined: BarcodeOutlinedIconType = (props, context) => (
    <Icon name='BarcodeOutlined' {...{ ...props, ...context.attrs }} icon={BarcodeOutlinedSvg} />
);

IconBarcodeOutlined.displayName = 'IconBarcodeOutlined';
IconBarcodeOutlined.theme = 'outlined';
IconBarcodeOutlined.originName = 'barcode';

export default IconBarcodeOutlined;
