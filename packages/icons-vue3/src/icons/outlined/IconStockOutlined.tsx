// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StockOutlinedSvg from 'icons-base/es/asn/StockOutlined';

export interface StockOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconStockOutlined: StockOutlinedIconType = (props, context) => <Icon name='StockOutlined' {...{ ...props, ...context.attrs }} icon={StockOutlinedSvg} />;

IconStockOutlined.displayName = 'IconStockOutlined';
IconStockOutlined.theme = 'outlined';
IconStockOutlined.originName = 'stock';

export default IconStockOutlined;
