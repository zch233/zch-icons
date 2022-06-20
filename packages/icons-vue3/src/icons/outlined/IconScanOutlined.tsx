// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ScanOutlinedSvg from 'icon-base/es/asn/ScanOutlined';

export interface ScanOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconScanOutlined: ScanOutlinedIconType = (props, context) => <Icon name='ScanOutlined' {...{ ...props, ...context.attrs }} icon={ScanOutlinedSvg} />;

IconScanOutlined.displayName = 'IconScanOutlined';

export default IconScanOutlined;
