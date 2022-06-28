// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ScanOutlinedSvg from 'gupo-icons-base/es/asn/ScanOutlined';

export interface ScanOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconScanOutlined: ScanOutlinedIconType = (props, context) => <Icon name='ScanOutlined' {...{ ...props, ...context.attrs }} icon={ScanOutlinedSvg} />;

IconScanOutlined.displayName = 'IconScanOutlined';
IconScanOutlined.theme = 'outlined';
IconScanOutlined.originName = 'scan';

export default IconScanOutlined;
