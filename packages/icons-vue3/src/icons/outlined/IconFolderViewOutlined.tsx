// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderViewOutlinedSvg from 'icons-base/es/asn/FolderViewOutlined';

export interface FolderViewOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFolderViewOutlined: FolderViewOutlinedIconType = (props, context) => (
    <Icon name='FolderViewOutlined' {...{ ...props, ...context.attrs }} icon={FolderViewOutlinedSvg} />
);

IconFolderViewOutlined.displayName = 'IconFolderViewOutlined';
IconFolderViewOutlined.theme = 'outlined';
IconFolderViewOutlined.originName = 'folder-view';

export default IconFolderViewOutlined;
