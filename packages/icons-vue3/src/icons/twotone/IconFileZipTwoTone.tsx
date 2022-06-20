// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileZipTwoToneSvg from 'icon-base/es/asn/FileZipTwoTone';

export interface FileZipTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileZipTwoTone: FileZipTwoToneIconType = (props, context) => (
    <Icon name='FileZipTwoTone' {...{ ...props, ...context.attrs }} icon={FileZipTwoToneSvg} />
);

IconFileZipTwoTone.displayName = 'IconFileZipTwoTone';

export default IconFileZipTwoTone;
