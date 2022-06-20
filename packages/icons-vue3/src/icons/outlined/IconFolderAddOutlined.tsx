// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderAddOutlinedSvg from 'icon-base/es/asn/FolderAddOutlined';

export interface FolderAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFolderAddOutlined: FolderAddOutlinedIconType = (props, context) => (
    <Icon name='FolderAddOutlined' {...{ ...props, ...context.attrs }} icon={FolderAddOutlinedSvg} />
);

IconFolderAddOutlined.displayName = 'IconFolderAddOutlined';

export default IconFolderAddOutlined;
