// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ClusterOutlinedSvg from 'icons-base/es/asn/ClusterOutlined';

export interface ClusterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconClusterOutlined: ClusterOutlinedIconType = (props, context) => (
    <Icon name='ClusterOutlined' {...{ ...props, ...context.attrs }} icon={ClusterOutlinedSvg} />
);

IconClusterOutlined.displayName = 'IconClusterOutlined';
IconClusterOutlined.theme = 'outlined';
IconClusterOutlined.originName = 'cluster';

export default IconClusterOutlined;
