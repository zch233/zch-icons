// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BarcodeOutlinedSvg from 'icon-base/es/asn/BarcodeOutlined';

export interface BarcodeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBarcodeOutlined: BarcodeOutlinedIconType = (props, context) => (
    <Icon name='BarcodeOutlined' {...{ ...props, ...context.attrs }} icon={BarcodeOutlinedSvg} />
);

IconBarcodeOutlined.displayName = 'IconBarcodeOutlined';

export default IconBarcodeOutlined;
