// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileExclamationFilledSvg from 'icons-base/es/asn/FileExclamationFilled';

export interface FileExclamationFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileExclamationFilled: FileExclamationFilledIconType = (props, context) => (
    <Icon name='FileExclamationFilled' {...{ ...props, ...context.attrs }} icon={FileExclamationFilledSvg} />
);

IconFileExclamationFilled.displayName = 'IconFileExclamationFilled';
IconFileExclamationFilled.theme = 'filled';
IconFileExclamationFilled.originName = 'file-exclamation';

export default IconFileExclamationFilled;
