// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import NodeIndexOutlinedSvg from 'icon-base/es/asn/NodeIndexOutlined';

export interface NodeIndexOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconNodeIndexOutlined: NodeIndexOutlinedIconType = (props, context) => (
    <Icon name='NodeIndexOutlined' {...{ ...props, ...context.attrs }} icon={NodeIndexOutlinedSvg} />
);

IconNodeIndexOutlined.displayName = 'IconNodeIndexOutlined';

export default IconNodeIndexOutlined;
