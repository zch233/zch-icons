// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileExcelFilledSvg from 'icon-base/es/asn/FileExcelFilled';

export interface FileExcelFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileExcelFilled: FileExcelFilledIconType = (props, context) => (
    <Icon name='FileExcelFilled' {...{ ...props, ...context.attrs }} icon={FileExcelFilledSvg} />
);

IconFileExcelFilled.displayName = 'IconFileExcelFilled';

export default IconFileExcelFilled;
