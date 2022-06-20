// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TrademarkCircleFilledSvg from 'icon-base/es/asn/TrademarkCircleFilled';

export interface TrademarkCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTrademarkCircleFilled: TrademarkCircleFilledIconType = (props, context) => (
    <Icon name='TrademarkCircleFilled' {...{ ...props, ...context.attrs }} icon={TrademarkCircleFilledSvg} />
);

IconTrademarkCircleFilled.displayName = 'IconTrademarkCircleFilled';

export default IconTrademarkCircleFilled;
