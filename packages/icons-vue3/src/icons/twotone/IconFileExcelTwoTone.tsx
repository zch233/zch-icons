// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileExcelTwotoneSvg from 'gupo-icons-base/es/asn/FileExcelTwotone';

export interface FileExcelTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileExcelTwotone: FileExcelTwotoneIconType = (props, context) => (
    <Icon name='FileExcelTwotone' {...{ ...props, ...context.attrs }} icon={FileExcelTwotoneSvg} />
);

IconFileExcelTwotone.displayName = 'IconFileExcelTwotone';
IconFileExcelTwotone.theme = 'twotone';
IconFileExcelTwotone.originName = 'file-excel';

export default IconFileExcelTwotone;
