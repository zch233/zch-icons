// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TrademarkOutlinedSvg from 'icon-base/es/asn/TrademarkOutlined';

export interface TrademarkOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTrademarkOutlined: TrademarkOutlinedIconType = (props, context) => (
    <Icon name='TrademarkOutlined' {...{ ...props, ...context.attrs }} icon={TrademarkOutlinedSvg} />
);

IconTrademarkOutlined.displayName = 'IconTrademarkOutlined';

export default IconTrademarkOutlined;
