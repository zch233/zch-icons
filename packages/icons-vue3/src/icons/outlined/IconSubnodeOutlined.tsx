// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SubnodeOutlinedSvg from 'icons-base/es/asn/SubnodeOutlined';

export interface SubnodeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSubnodeOutlined: SubnodeOutlinedIconType = (props, context) => (
    <Icon name='SubnodeOutlined' {...{ ...props, ...context.attrs }} icon={SubnodeOutlinedSvg} />
);

IconSubnodeOutlined.displayName = 'IconSubnodeOutlined';
IconSubnodeOutlined.theme = 'outlined';
IconSubnodeOutlined.originName = 'subnode';

export default IconSubnodeOutlined;
