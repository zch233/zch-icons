// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileZipTwotoneSvg from 'icons-base/es/asn/FileZipTwotone';

export interface FileZipTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileZipTwotone: FileZipTwotoneIconType = (props, context) => (
    <Icon name='FileZipTwotone' {...{ ...props, ...context.attrs }} icon={FileZipTwotoneSvg} />
);

IconFileZipTwotone.displayName = 'IconFileZipTwotone';
IconFileZipTwotone.theme = 'twotone';
IconFileZipTwotone.originName = 'file-zip';

export default IconFileZipTwotone;
