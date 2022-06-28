// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SortDescendingOutlinedSvg from 'gupo-icons-base/es/asn/SortDescendingOutlined';

export interface SortDescendingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSortDescendingOutlined: SortDescendingOutlinedIconType = (props, context) => (
    <Icon name='SortDescendingOutlined' {...{ ...props, ...context.attrs }} icon={SortDescendingOutlinedSvg} />
);

IconSortDescendingOutlined.displayName = 'IconSortDescendingOutlined';
IconSortDescendingOutlined.theme = 'outlined';
IconSortDescendingOutlined.originName = 'sort-descending';

export default IconSortDescendingOutlined;
