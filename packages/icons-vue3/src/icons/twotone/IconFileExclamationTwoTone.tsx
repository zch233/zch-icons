// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileExclamationTwotoneSvg from 'gupo-icons-base/es/asn/FileExclamationTwotone';

export interface FileExclamationTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileExclamationTwotone: FileExclamationTwotoneIconType = (props, context) => (
    <Icon name='FileExclamationTwotone' {...{ ...props, ...context.attrs }} icon={FileExclamationTwotoneSvg} />
);

IconFileExclamationTwotone.displayName = 'IconFileExclamationTwotone';
IconFileExclamationTwotone.theme = 'twotone';
IconFileExclamationTwotone.originName = 'file-exclamation';

export default IconFileExclamationTwotone;
