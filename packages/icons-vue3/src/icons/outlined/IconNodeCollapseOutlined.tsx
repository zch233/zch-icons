// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import NodeCollapseOutlinedSvg from 'gupo-icons-base/es/asn/NodeCollapseOutlined';

export interface NodeCollapseOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconNodeCollapseOutlined: NodeCollapseOutlinedIconType = (props, context) => (
    <Icon name='NodeCollapseOutlined' {...{ ...props, ...context.attrs }} icon={NodeCollapseOutlinedSvg} />
);

IconNodeCollapseOutlined.displayName = 'IconNodeCollapseOutlined';
IconNodeCollapseOutlined.theme = 'outlined';
IconNodeCollapseOutlined.originName = 'node-collapse';

export default IconNodeCollapseOutlined;
