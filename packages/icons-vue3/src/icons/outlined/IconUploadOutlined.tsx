// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UploadOutlinedSvg from 'icons-base/es/asn/UploadOutlined';

export interface UploadOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUploadOutlined: UploadOutlinedIconType = (props, context) => (
    <Icon name='UploadOutlined' {...{ ...props, ...context.attrs }} icon={UploadOutlinedSvg} />
);

IconUploadOutlined.displayName = 'IconUploadOutlined';
IconUploadOutlined.theme = 'outlined';
IconUploadOutlined.originName = 'upload';

export default IconUploadOutlined;
