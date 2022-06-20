// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FolderOpenOutlinedSvg from 'icon-base/es/asn/FolderOpenOutlined';

export interface FolderOpenOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFolderOpenOutlined: FolderOpenOutlinedIconType = (props, context) => (
    <Icon name='FolderOpenOutlined' {...{ ...props, ...context.attrs }} icon={FolderOpenOutlinedSvg} />
);

IconFolderOpenOutlined.displayName = 'IconFolderOpenOutlined';

export default IconFolderOpenOutlined;
