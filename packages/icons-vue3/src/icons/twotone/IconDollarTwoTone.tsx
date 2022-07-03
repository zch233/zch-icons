// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DollarTwotoneSvg from 'icons-base/es/asn/DollarTwotone';

export interface DollarTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDollarTwotone: DollarTwotoneIconType = (props, context) => <Icon name='DollarTwotone' {...{ ...props, ...context.attrs }} icon={DollarTwotoneSvg} />;

IconDollarTwotone.displayName = 'IconDollarTwotone';
IconDollarTwotone.theme = 'twotone';
IconDollarTwotone.originName = 'dollar';

export default IconDollarTwotone;
