// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TrademarkCircleTwotoneSvg from 'gupo-icons-base/es/asn/TrademarkCircleTwotone';

export interface TrademarkCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTrademarkCircleTwotone: TrademarkCircleTwotoneIconType = (props, context) => (
    <Icon name='TrademarkCircleTwotone' {...{ ...props, ...context.attrs }} icon={TrademarkCircleTwotoneSvg} />
);

IconTrademarkCircleTwotone.displayName = 'IconTrademarkCircleTwotone';
IconTrademarkCircleTwotone.theme = 'twotone';
IconTrademarkCircleTwotone.originName = 'trademark-circle';

export default IconTrademarkCircleTwotone;
