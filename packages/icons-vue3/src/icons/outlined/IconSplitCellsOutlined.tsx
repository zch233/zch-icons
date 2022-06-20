// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SplitCellsOutlinedSvg from 'icon-base/es/asn/SplitCellsOutlined';

export interface SplitCellsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSplitCellsOutlined: SplitCellsOutlinedIconType = (props, context) => (
    <Icon name='SplitCellsOutlined' {...{ ...props, ...context.attrs }} icon={SplitCellsOutlinedSvg} />
);

IconSplitCellsOutlined.displayName = 'IconSplitCellsOutlined';

export default IconSplitCellsOutlined;
