// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MergeCellsOutlinedSvg from 'icons-base/es/asn/MergeCellsOutlined';

export interface MergeCellsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMergeCellsOutlined: MergeCellsOutlinedIconType = (props, context) => (
    <Icon name='MergeCellsOutlined' {...{ ...props, ...context.attrs }} icon={MergeCellsOutlinedSvg} />
);

IconMergeCellsOutlined.displayName = 'IconMergeCellsOutlined';
IconMergeCellsOutlined.theme = 'outlined';
IconMergeCellsOutlined.originName = 'merge-cells';

export default IconMergeCellsOutlined;
