// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderTwotoneSvg from 'gupo-icons-base/es/asn/FolderTwotone';

export interface FolderTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFolderTwotone: FolderTwotoneIconType = (props, context) => <Icon name='FolderTwotone' {...{ ...props, ...context.attrs }} icon={FolderTwotoneSvg} />;

IconFolderTwotone.displayName = 'IconFolderTwotone';
IconFolderTwotone.theme = 'twotone';
IconFolderTwotone.originName = 'folder';

export default IconFolderTwotone;
