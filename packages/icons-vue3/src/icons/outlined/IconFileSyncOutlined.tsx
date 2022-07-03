// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileSyncOutlinedSvg from 'icons-base/es/asn/FileSyncOutlined';

export interface FileSyncOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFileSyncOutlined: FileSyncOutlinedIconType = (props, context) => (
    <Icon name='FileSyncOutlined' {...{ ...props, ...context.attrs }} icon={FileSyncOutlinedSvg} />
);

IconFileSyncOutlined.displayName = 'IconFileSyncOutlined';
IconFileSyncOutlined.theme = 'outlined';
IconFileSyncOutlined.originName = 'file-sync';

export default IconFileSyncOutlined;
