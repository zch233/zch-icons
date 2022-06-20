// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileExclamationTwoToneSvg from 'icon-base/es/asn/FileExclamationTwoTone';

export interface FileExclamationTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileExclamationTwoTone: FileExclamationTwoToneIconType = (props, context) => (
    <Icon name='FileExclamationTwoTone' {...{ ...props, ...context.attrs }} icon={FileExclamationTwoToneSvg} />
);

IconFileExclamationTwoTone.displayName = 'IconFileExclamationTwoTone';

export default IconFileExclamationTwoTone;
