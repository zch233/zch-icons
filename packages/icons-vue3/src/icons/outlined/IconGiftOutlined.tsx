// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GiftOutlinedSvg from 'icon-base/es/asn/GiftOutlined';

export interface GiftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGiftOutlined: GiftOutlinedIconType = (props, context) => <Icon name='GiftOutlined' {...{ ...props, ...context.attrs }} icon={GiftOutlinedSvg} />;

IconGiftOutlined.displayName = 'IconGiftOutlined';

export default IconGiftOutlined;
