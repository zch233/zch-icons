// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileWordOutlinedSvg from 'gupo-icons-base/es/asn/FileWordOutlined';

export interface FileWordOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileWordOutlined: FileWordOutlinedIconType = (props, context) => (
    <Icon name='FileWordOutlined' {...{ ...props, ...context.attrs }} icon={FileWordOutlinedSvg} />
);

IconFileWordOutlined.displayName = 'IconFileWordOutlined';
IconFileWordOutlined.theme = 'outlined';
IconFileWordOutlined.originName = 'file-word';

export default IconFileWordOutlined;
