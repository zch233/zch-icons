// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GiftTwotoneSvg from 'gupo-icons-base/es/asn/GiftTwotone';

export interface GiftTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGiftTwotone: GiftTwotoneIconType = (props, context) => <Icon name='GiftTwotone' {...{ ...props, ...context.attrs }} icon={GiftTwotoneSvg} />;

IconGiftTwotone.displayName = 'IconGiftTwotone';
IconGiftTwotone.theme = 'twotone';
IconGiftTwotone.originName = 'gift';

export default IconGiftTwotone;
