// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloudSyncOutlinedSvg from 'icon-base/es/asn/CloudSyncOutlined';

export interface CloudSyncOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCloudSyncOutlined: CloudSyncOutlinedIconType = (props, context) => (
    <Icon name='CloudSyncOutlined' {...{ ...props, ...context.attrs }} icon={CloudSyncOutlinedSvg} />
);

IconCloudSyncOutlined.displayName = 'IconCloudSyncOutlined';

export default IconCloudSyncOutlined;
