// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GoldFilledSvg from 'icons-base/es/asn/GoldFilled';

export interface GoldFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGoldFilled: GoldFilledIconType = (props, context) => <Icon name='GoldFilled' {...{ ...props, ...context.attrs }} icon={GoldFilledSvg} />;

IconGoldFilled.displayName = 'IconGoldFilled';
IconGoldFilled.theme = 'filled';
IconGoldFilled.originName = 'gold';

export default IconGoldFilled;
