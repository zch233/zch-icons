// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileTextOutlinedSvg from 'gupo-icons-base/es/asn/FileTextOutlined';

export interface FileTextOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileTextOutlined: FileTextOutlinedIconType = (props, context) => (
    <Icon name='FileTextOutlined' {...{ ...props, ...context.attrs }} icon={FileTextOutlinedSvg} />
);

IconFileTextOutlined.displayName = 'IconFileTextOutlined';
IconFileTextOutlined.theme = 'outlined';
IconFileTextOutlined.originName = 'file-text';

export default IconFileTextOutlined;
