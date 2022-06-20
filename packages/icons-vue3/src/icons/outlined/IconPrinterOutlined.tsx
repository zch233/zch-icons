// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PrinterOutlinedSvg from 'icon-base/es/asn/PrinterOutlined';

export interface PrinterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPrinterOutlined: PrinterOutlinedIconType = (props, context) => (
    <Icon name='PrinterOutlined' {...{ ...props, ...context.attrs }} icon={PrinterOutlinedSvg} />
);

IconPrinterOutlined.displayName = 'IconPrinterOutlined';

export default IconPrinterOutlined;
