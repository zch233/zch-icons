// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileProtectOutlinedSvg from 'icons-base/es/asn/FileProtectOutlined';

export interface FileProtectOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileProtectOutlined: FileProtectOutlinedIconType = (props, context) => (
    <Icon name='FileProtectOutlined' {...{ ...props, ...context.attrs }} icon={FileProtectOutlinedSvg} />
);

IconFileProtectOutlined.displayName = 'IconFileProtectOutlined';
IconFileProtectOutlined.theme = 'outlined';
IconFileProtectOutlined.originName = 'file-protect';

export default IconFileProtectOutlined;
