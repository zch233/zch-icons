// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ExportOutlinedSvg from 'gupo-icons-base/es/asn/ExportOutlined';

export interface ExportOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconExportOutlined: ExportOutlinedIconType = (props, context) => (
    <Icon name='ExportOutlined' {...{ ...props, ...context.attrs }} icon={ExportOutlinedSvg} />
);

IconExportOutlined.displayName = 'IconExportOutlined';
IconExportOutlined.theme = 'outlined';
IconExportOutlined.originName = 'export';

export default IconExportOutlined;
