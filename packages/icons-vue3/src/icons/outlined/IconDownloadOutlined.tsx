// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DownloadOutlinedSvg from 'gupo-icons-base/es/asn/DownloadOutlined';

export interface DownloadOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDownloadOutlined: DownloadOutlinedIconType = (props, context) => (
    <Icon name='DownloadOutlined' {...{ ...props, ...context.attrs }} icon={DownloadOutlinedSvg} />
);

IconDownloadOutlined.displayName = 'IconDownloadOutlined';
IconDownloadOutlined.theme = 'outlined';
IconDownloadOutlined.originName = 'download';

export default IconDownloadOutlined;
