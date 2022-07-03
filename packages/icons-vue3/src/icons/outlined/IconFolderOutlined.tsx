// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderOutlinedSvg from 'icons-base/es/asn/FolderOutlined';

export interface FolderOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFolderOutlined: FolderOutlinedIconType = (props, context) => (
    <Icon name='FolderOutlined' {...{ ...props, ...context.attrs }} icon={FolderOutlinedSvg} />
);

IconFolderOutlined.displayName = 'IconFolderOutlined';
IconFolderOutlined.theme = 'outlined';
IconFolderOutlined.originName = 'folder';

export default IconFolderOutlined;
