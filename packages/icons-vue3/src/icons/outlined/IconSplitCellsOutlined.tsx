// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SplitCellsOutlinedSvg from 'icons-base/es/asn/SplitCellsOutlined';

export interface SplitCellsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSplitCellsOutlined: SplitCellsOutlinedIconType = (props, context) => (
    <Icon name='SplitCellsOutlined' {...{ ...props, ...context.attrs }} icon={SplitCellsOutlinedSvg} />
);

IconSplitCellsOutlined.displayName = 'IconSplitCellsOutlined';
IconSplitCellsOutlined.theme = 'outlined';
IconSplitCellsOutlined.originName = 'split-cells';

export default IconSplitCellsOutlined;
