// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import NodeExpandOutlinedSvg from 'icon-base/es/asn/NodeExpandOutlined';

export interface NodeExpandOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconNodeExpandOutlined: NodeExpandOutlinedIconType = (props, context) => (
    <Icon name='NodeExpandOutlined' {...{ ...props, ...context.attrs }} icon={NodeExpandOutlinedSvg} />
);

IconNodeExpandOutlined.displayName = 'IconNodeExpandOutlined';

export default IconNodeExpandOutlined;
