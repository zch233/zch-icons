// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GoldFilledSvg from 'icon-base/es/asn/GoldFilled';

export interface GoldFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGoldFilled: GoldFilledIconType = (props, context) => <Icon name='GoldFilled' {...{ ...props, ...context.attrs }} icon={GoldFilledSvg} />;

IconGoldFilled.displayName = 'IconGoldFilled';

export default IconGoldFilled;
