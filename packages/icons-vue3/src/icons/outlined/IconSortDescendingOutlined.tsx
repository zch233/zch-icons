// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SortDescendingOutlinedSvg from 'icon-base/es/asn/SortDescendingOutlined';

export interface SortDescendingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSortDescendingOutlined: SortDescendingOutlinedIconType = (props, context) => (
    <Icon name='SortDescendingOutlined' {...{ ...props, ...context.attrs }} icon={SortDescendingOutlinedSvg} />
);

IconSortDescendingOutlined.displayName = 'IconSortDescendingOutlined';

export default IconSortDescendingOutlined;
