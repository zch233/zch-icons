// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloudSyncOutlinedSvg from 'gupo-icons-base/es/asn/CloudSyncOutlined';

export interface CloudSyncOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCloudSyncOutlined: CloudSyncOutlinedIconType = (props, context) => (
    <Icon name='CloudSyncOutlined' {...{ ...props, ...context.attrs }} icon={CloudSyncOutlinedSvg} />
);

IconCloudSyncOutlined.displayName = 'IconCloudSyncOutlined';
IconCloudSyncOutlined.theme = 'outlined';
IconCloudSyncOutlined.originName = 'cloud-sync';

export default IconCloudSyncOutlined;
