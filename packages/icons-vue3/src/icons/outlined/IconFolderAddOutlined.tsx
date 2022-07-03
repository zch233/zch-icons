// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderAddOutlinedSvg from 'icons-base/es/asn/FolderAddOutlined';

export interface FolderAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFolderAddOutlined: FolderAddOutlinedIconType = (props, context) => (
    <Icon name='FolderAddOutlined' {...{ ...props, ...context.attrs }} icon={FolderAddOutlinedSvg} />
);

IconFolderAddOutlined.displayName = 'IconFolderAddOutlined';
IconFolderAddOutlined.theme = 'outlined';
IconFolderAddOutlined.originName = 'folder-add';

export default IconFolderAddOutlined;
