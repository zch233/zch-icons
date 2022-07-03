// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TrademarkCircleFilledSvg from 'icons-base/es/asn/TrademarkCircleFilled';

export interface TrademarkCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTrademarkCircleFilled: TrademarkCircleFilledIconType = (props, context) => (
    <Icon name='TrademarkCircleFilled' {...{ ...props, ...context.attrs }} icon={TrademarkCircleFilledSvg} />
);

IconTrademarkCircleFilled.displayName = 'IconTrademarkCircleFilled';
IconTrademarkCircleFilled.theme = 'filled';
IconTrademarkCircleFilled.originName = 'trademark-circle';

export default IconTrademarkCircleFilled;
