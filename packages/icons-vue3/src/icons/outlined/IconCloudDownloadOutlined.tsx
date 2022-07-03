// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloudDownloadOutlinedSvg from 'icons-base/es/asn/CloudDownloadOutlined';

export interface CloudDownloadOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCloudDownloadOutlined: CloudDownloadOutlinedIconType = (props, context) => (
    <Icon name='CloudDownloadOutlined' {...{ ...props, ...context.attrs }} icon={CloudDownloadOutlinedSvg} />
);

IconCloudDownloadOutlined.displayName = 'IconCloudDownloadOutlined';
IconCloudDownloadOutlined.theme = 'outlined';
IconCloudDownloadOutlined.originName = 'cloud-download';

export default IconCloudDownloadOutlined;
