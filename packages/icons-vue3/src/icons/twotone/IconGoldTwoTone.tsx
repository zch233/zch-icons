// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GoldTwotoneSvg from 'icons-base/es/asn/GoldTwotone';

export interface GoldTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGoldTwotone: GoldTwotoneIconType = (props, context) => <Icon name='GoldTwotone' {...{ ...props, ...context.attrs }} icon={GoldTwotoneSvg} />;

IconGoldTwotone.displayName = 'IconGoldTwotone';
IconGoldTwotone.theme = 'twotone';
IconGoldTwotone.originName = 'gold';

export default IconGoldTwotone;
