// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderAddTwoToneSvg from 'icon-base/es/asn/FolderAddTwoTone';

export interface FolderAddTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFolderAddTwoTone: FolderAddTwoToneIconType = (props, context) => (
    <Icon name='FolderAddTwoTone' {...{ ...props, ...context.attrs }} icon={FolderAddTwoToneSvg} />
);

IconFolderAddTwoTone.displayName = 'IconFolderAddTwoTone';

export default IconFolderAddTwoTone;
