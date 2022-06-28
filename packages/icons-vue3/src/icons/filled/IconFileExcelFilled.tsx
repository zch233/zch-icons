// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileExcelFilledSvg from 'gupo-icons-base/es/asn/FileExcelFilled';

export interface FileExcelFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileExcelFilled: FileExcelFilledIconType = (props, context) => (
    <Icon name='FileExcelFilled' {...{ ...props, ...context.attrs }} icon={FileExcelFilledSvg} />
);

IconFileExcelFilled.displayName = 'IconFileExcelFilled';
IconFileExcelFilled.theme = 'filled';
IconFileExcelFilled.originName = 'file-excel';

export default IconFileExcelFilled;
