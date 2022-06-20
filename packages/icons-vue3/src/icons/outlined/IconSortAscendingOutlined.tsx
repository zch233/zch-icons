// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SortAscendingOutlinedSvg from 'icon-base/es/asn/SortAscendingOutlined';

export interface SortAscendingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSortAscendingOutlined: SortAscendingOutlinedIconType = (props, context) => (
    <Icon name='SortAscendingOutlined' {...{ ...props, ...context.attrs }} icon={SortAscendingOutlinedSvg} />
);

IconSortAscendingOutlined.displayName = 'IconSortAscendingOutlined';

export default IconSortAscendingOutlined;
