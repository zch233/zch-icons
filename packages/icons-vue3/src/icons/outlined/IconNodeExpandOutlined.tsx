// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import NodeExpandOutlinedSvg from 'gupo-icons-base/es/asn/NodeExpandOutlined';

export interface NodeExpandOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconNodeExpandOutlined: NodeExpandOutlinedIconType = (props, context) => (
    <Icon name='NodeExpandOutlined' {...{ ...props, ...context.attrs }} icon={NodeExpandOutlinedSvg} />
);

IconNodeExpandOutlined.displayName = 'IconNodeExpandOutlined';
IconNodeExpandOutlined.theme = 'outlined';
IconNodeExpandOutlined.originName = 'node-expand';

export default IconNodeExpandOutlined;
