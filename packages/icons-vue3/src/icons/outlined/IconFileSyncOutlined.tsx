// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FileSyncOutlinedSvg from 'icon-base/es/asn/FileSyncOutlined';

export interface FileSyncOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFileSyncOutlined: FileSyncOutlinedIconType = (props, context) => (
    <Icon name='FileSyncOutlined' {...{ ...props, ...context.attrs }} icon={FileSyncOutlinedSvg} />
);

IconFileSyncOutlined.displayName = 'IconFileSyncOutlined';

export default IconFileSyncOutlined;
