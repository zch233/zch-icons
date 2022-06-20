// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MoneyCollectOutlinedSvg from 'icon-base/es/asn/MoneyCollectOutlined';

export interface MoneyCollectOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMoneyCollectOutlined: MoneyCollectOutlinedIconType = (props, context) => (
    <Icon name='MoneyCollectOutlined' {...{ ...props, ...context.attrs }} icon={MoneyCollectOutlinedSvg} />
);

IconMoneyCollectOutlined.displayName = 'IconMoneyCollectOutlined';

export default IconMoneyCollectOutlined;
