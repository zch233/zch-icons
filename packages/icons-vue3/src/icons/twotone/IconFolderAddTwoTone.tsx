// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderAddTwotoneSvg from 'gupo-icons-base/es/asn/FolderAddTwotone';

export interface FolderAddTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFolderAddTwotone: FolderAddTwotoneIconType = (props, context) => (
    <Icon name='FolderAddTwotone' {...{ ...props, ...context.attrs }} icon={FolderAddTwotoneSvg} />
);

IconFolderAddTwotone.displayName = 'IconFolderAddTwotone';
IconFolderAddTwotone.theme = 'twotone';
IconFolderAddTwotone.originName = 'folder-add';

export default IconFolderAddTwotone;
