// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SyncOutlinedSvg from 'gupo-icons-base/es/asn/SyncOutlined';

export interface SyncOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSyncOutlined: SyncOutlinedIconType = (props, context) => <Icon name='SyncOutlined' {...{ ...props, ...context.attrs }} icon={SyncOutlinedSvg} />;

IconSyncOutlined.displayName = 'IconSyncOutlined';
IconSyncOutlined.theme = 'outlined';
IconSyncOutlined.originName = 'sync';

export default IconSyncOutlined;
