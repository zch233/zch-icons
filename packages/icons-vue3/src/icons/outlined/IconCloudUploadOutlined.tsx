// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloudUploadOutlinedSvg from 'icons-base/es/asn/CloudUploadOutlined';

export interface CloudUploadOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCloudUploadOutlined: CloudUploadOutlinedIconType = (props, context) => (
    <Icon name='CloudUploadOutlined' {...{ ...props, ...context.attrs }} icon={CloudUploadOutlinedSvg} />
);

IconCloudUploadOutlined.displayName = 'IconCloudUploadOutlined';
IconCloudUploadOutlined.theme = 'outlined';
IconCloudUploadOutlined.originName = 'cloud-upload';

export default IconCloudUploadOutlined;
