// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileUnknownOutlinedSvg from 'gupo-icons-base/es/asn/FileUnknownOutlined';

export interface FileUnknownOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileUnknownOutlined: FileUnknownOutlinedIconType = (props, context) => (
    <Icon name='FileUnknownOutlined' {...{ ...props, ...context.attrs }} icon={FileUnknownOutlinedSvg} />
);

IconFileUnknownOutlined.displayName = 'IconFileUnknownOutlined';
IconFileUnknownOutlined.theme = 'outlined';
IconFileUnknownOutlined.originName = 'file-unknown';

export default IconFileUnknownOutlined;
