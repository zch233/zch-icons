// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileExcelOutlinedSvg from 'icon-base/es/asn/FileExcelOutlined';

export interface FileExcelOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileExcelOutlined: FileExcelOutlinedIconType = (props, context) => (
    <Icon name='FileExcelOutlined' {...{ ...props, ...context.attrs }} icon={FileExcelOutlinedSvg} />
);

IconFileExcelOutlined.displayName = 'IconFileExcelOutlined';

export default IconFileExcelOutlined;
