// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FilterTwotoneSvg from 'gupo-icons-base/es/asn/FilterTwotone';

export interface FilterTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFilterTwotone: FilterTwotoneIconType = (props, context) => <Icon name='FilterTwotone' {...{ ...props, ...context.attrs }} icon={FilterTwotoneSvg} />;

IconFilterTwotone.displayName = 'IconFilterTwotone';
IconFilterTwotone.theme = 'twotone';
IconFilterTwotone.originName = 'filter';

export default IconFilterTwotone;
