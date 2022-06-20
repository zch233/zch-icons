// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GiftTwoToneSvg from 'icon-base/es/asn/GiftTwoTone';

export interface GiftTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGiftTwoTone: GiftTwoToneIconType = (props, context) => <Icon name='GiftTwoTone' {...{ ...props, ...context.attrs }} icon={GiftTwoToneSvg} />;

IconGiftTwoTone.displayName = 'IconGiftTwoTone';

export default IconGiftTwoTone;
