// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SortAscendingOutlinedSvg from 'gupo-icons-base/es/asn/SortAscendingOutlined';

export interface SortAscendingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSortAscendingOutlined: SortAscendingOutlinedIconType = (props, context) => (
    <Icon name='SortAscendingOutlined' {...{ ...props, ...context.attrs }} icon={SortAscendingOutlinedSvg} />
);

IconSortAscendingOutlined.displayName = 'IconSortAscendingOutlined';
IconSortAscendingOutlined.theme = 'outlined';
IconSortAscendingOutlined.originName = 'sort-ascending';

export default IconSortAscendingOutlined;
