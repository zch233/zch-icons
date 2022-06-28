// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilePdfOutlinedSvg from 'gupo-icons-base/es/asn/FilePdfOutlined';

export interface FilePdfOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFilePdfOutlined: FilePdfOutlinedIconType = (props, context) => (
    <Icon name='FilePdfOutlined' {...{ ...props, ...context.attrs }} icon={FilePdfOutlinedSvg} />
);

IconFilePdfOutlined.displayName = 'IconFilePdfOutlined';
IconFilePdfOutlined.theme = 'outlined';
IconFilePdfOutlined.originName = 'file-pdf';

export default IconFilePdfOutlined;
