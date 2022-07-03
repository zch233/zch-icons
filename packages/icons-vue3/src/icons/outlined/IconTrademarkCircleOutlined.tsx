// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TrademarkCircleOutlinedSvg from 'icons-base/es/asn/TrademarkCircleOutlined';

export interface TrademarkCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTrademarkCircleOutlined: TrademarkCircleOutlinedIconType = (props, context) => (
    <Icon name='TrademarkCircleOutlined' {...{ ...props, ...context.attrs }} icon={TrademarkCircleOutlinedSvg} />
);

IconTrademarkCircleOutlined.displayName = 'IconTrademarkCircleOutlined';
IconTrademarkCircleOutlined.theme = 'outlined';
IconTrademarkCircleOutlined.originName = 'trademark-circle';

export default IconTrademarkCircleOutlined;
