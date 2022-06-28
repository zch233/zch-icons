// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderOpenTwotoneSvg from 'gupo-icons-base/es/asn/FolderOpenTwotone';

export interface FolderOpenTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFolderOpenTwotone: FolderOpenTwotoneIconType = (props, context) => (
    <Icon name='FolderOpenTwotone' {...{ ...props, ...context.attrs }} icon={FolderOpenTwotoneSvg} />
);

IconFolderOpenTwotone.displayName = 'IconFolderOpenTwotone';
IconFolderOpenTwotone.theme = 'twotone';
IconFolderOpenTwotone.originName = 'folder-open';

export default IconFolderOpenTwotone;
