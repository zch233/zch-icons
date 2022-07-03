// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderFilledSvg from 'icons-base/es/asn/FolderFilled';

export interface FolderFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFolderFilled: FolderFilledIconType = (props, context) => <Icon name='FolderFilled' {...{ ...props, ...context.attrs }} icon={FolderFilledSvg} />;

IconFolderFilled.displayName = 'IconFolderFilled';
IconFolderFilled.theme = 'filled';
IconFolderFilled.originName = 'folder';

export default IconFolderFilled;
