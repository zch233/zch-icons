// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilterOutlinedSvg from 'icon-base/es/asn/FilterOutlined';

export interface FilterOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFilterOutlined: FilterOutlinedIconType = (props, context) => (
    <Icon name='FilterOutlined' {...{ ...props, ...context.attrs }} icon={FilterOutlinedSvg} />
);

IconFilterOutlined.displayName = 'IconFilterOutlined';

export default IconFilterOutlined;
