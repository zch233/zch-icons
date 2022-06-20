// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StockOutlinedSvg from 'icon-base/es/asn/StockOutlined';

export interface StockOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconStockOutlined: StockOutlinedIconType = (props, context) => <Icon name='StockOutlined' {...{ ...props, ...context.attrs }} icon={StockOutlinedSvg} />;

IconStockOutlined.displayName = 'IconStockOutlined';

export default IconStockOutlined;
