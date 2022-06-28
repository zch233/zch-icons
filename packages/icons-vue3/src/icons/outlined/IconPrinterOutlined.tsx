// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PrinterOutlinedSvg from 'gupo-icons-base/es/asn/PrinterOutlined';

export interface PrinterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPrinterOutlined: PrinterOutlinedIconType = (props, context) => (
    <Icon name='PrinterOutlined' {...{ ...props, ...context.attrs }} icon={PrinterOutlinedSvg} />
);

IconPrinterOutlined.displayName = 'IconPrinterOutlined';
IconPrinterOutlined.theme = 'outlined';
IconPrinterOutlined.originName = 'printer';

export default IconPrinterOutlined;
