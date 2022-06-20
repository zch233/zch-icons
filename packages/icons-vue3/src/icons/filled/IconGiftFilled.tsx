// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GiftFilledSvg from 'icon-base/es/asn/GiftFilled';

export interface GiftFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGiftFilled: GiftFilledIconType = (props, context) => <Icon name='GiftFilled' {...{ ...props, ...context.attrs }} icon={GiftFilledSvg} />;

IconGiftFilled.displayName = 'IconGiftFilled';

export default IconGiftFilled;
