// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileJpgOutlinedSvg from 'gupo-icons-base/es/asn/FileJpgOutlined';

export interface FileJpgOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileJpgOutlined: FileJpgOutlinedIconType = (props, context) => (
    <Icon name='FileJpgOutlined' {...{ ...props, ...context.attrs }} icon={FileJpgOutlinedSvg} />
);

IconFileJpgOutlined.displayName = 'IconFileJpgOutlined';
IconFileJpgOutlined.theme = 'outlined';
IconFileJpgOutlined.originName = 'file-jpg';

export default IconFileJpgOutlined;
