// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileExclamationOutlinedSvg from 'icon-base/es/asn/FileExclamationOutlined';

export interface FileExclamationOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileExclamationOutlined: FileExclamationOutlinedIconType = (props, context) => (
    <Icon name='FileExclamationOutlined' {...{ ...props, ...context.attrs }} icon={FileExclamationOutlinedSvg} />
);

IconFileExclamationOutlined.displayName = 'IconFileExclamationOutlined';

export default IconFileExclamationOutlined;
