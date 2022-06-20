// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderAddFilledSvg from 'icon-base/es/asn/FolderAddFilled';

export interface FolderAddFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFolderAddFilled: FolderAddFilledIconType = (props, context) => (
    <Icon name='FolderAddFilled' {...{ ...props, ...context.attrs }} icon={FolderAddFilledSvg} />
);

IconFolderAddFilled.displayName = 'IconFolderAddFilled';

export default IconFolderAddFilled;
