// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderOpenFilledSvg from 'icons-base/es/asn/FolderOpenFilled';

export interface FolderOpenFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFolderOpenFilled: FolderOpenFilledIconType = (props, context) => (
    <Icon name='FolderOpenFilled' {...{ ...props, ...context.attrs }} icon={FolderOpenFilledSvg} />
);

IconFolderOpenFilled.displayName = 'IconFolderOpenFilled';
IconFolderOpenFilled.theme = 'filled';
IconFolderOpenFilled.originName = 'folder-open';

export default IconFolderOpenFilled;
