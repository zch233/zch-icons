// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderAddFilledSvg from 'icons-base/es/asn/FolderAddFilled';

export interface FolderAddFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFolderAddFilled: FolderAddFilledIconType = (props, context) => (
    <Icon name='FolderAddFilled' {...{ ...props, ...context.attrs }} icon={FolderAddFilledSvg} />
);

IconFolderAddFilled.displayName = 'IconFolderAddFilled';
IconFolderAddFilled.theme = 'filled';
IconFolderAddFilled.originName = 'folder-add';

export default IconFolderAddFilled;
