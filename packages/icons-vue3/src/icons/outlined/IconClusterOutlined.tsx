// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ClusterOutlinedSvg from 'icon-base/es/asn/ClusterOutlined';

export interface ClusterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconClusterOutlined: ClusterOutlinedIconType = (props, context) => (
    <Icon name='ClusterOutlined' {...{ ...props, ...context.attrs }} icon={ClusterOutlinedSvg} />
);

IconClusterOutlined.displayName = 'IconClusterOutlined';

export default IconClusterOutlined;
