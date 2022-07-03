// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileZipOutlinedSvg from 'icons-base/es/asn/FileZipOutlined';

export interface FileZipOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileZipOutlined: FileZipOutlinedIconType = (props, context) => (
    <Icon name='FileZipOutlined' {...{ ...props, ...context.attrs }} icon={FileZipOutlinedSvg} />
);

IconFileZipOutlined.displayName = 'IconFileZipOutlined';
IconFileZipOutlined.theme = 'outlined';
IconFileZipOutlined.originName = 'file-zip';

export default IconFileZipOutlined;
