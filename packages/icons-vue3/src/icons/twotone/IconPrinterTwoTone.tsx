// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PrinterTwotoneSvg from 'icons-base/es/asn/PrinterTwotone';

export interface PrinterTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPrinterTwotone: PrinterTwotoneIconType = (props, context) => (
    <Icon name='PrinterTwotone' {...{ ...props, ...context.attrs }} icon={PrinterTwotoneSvg} />
);

IconPrinterTwotone.displayName = 'IconPrinterTwotone';
IconPrinterTwotone.theme = 'twotone';
IconPrinterTwotone.originName = 'printer';

export default IconPrinterTwotone;
