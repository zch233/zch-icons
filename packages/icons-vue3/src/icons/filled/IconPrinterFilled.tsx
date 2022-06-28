// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PrinterFilledSvg from 'gupo-icons-base/es/asn/PrinterFilled';

export interface PrinterFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPrinterFilled: PrinterFilledIconType = (props, context) => <Icon name='PrinterFilled' {...{ ...props, ...context.attrs }} icon={PrinterFilledSvg} />;

IconPrinterFilled.displayName = 'IconPrinterFilled';
IconPrinterFilled.theme = 'filled';
IconPrinterFilled.originName = 'printer';

export default IconPrinterFilled;
