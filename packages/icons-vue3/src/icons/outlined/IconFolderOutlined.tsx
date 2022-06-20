// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderOutlinedSvg from 'icon-base/es/asn/FolderOutlined';

export interface FolderOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFolderOutlined: FolderOutlinedIconType = (props, context) => (
    <Icon name='FolderOutlined' {...{ ...props, ...context.attrs }} icon={FolderOutlinedSvg} />
);

IconFolderOutlined.displayName = 'IconFolderOutlined';

export default IconFolderOutlined;
