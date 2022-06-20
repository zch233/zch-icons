// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MoneyCollectFilledSvg from 'icon-base/es/asn/MoneyCollectFilled';

export interface MoneyCollectFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMoneyCollectFilled: MoneyCollectFilledIconType = (props, context) => (
    <Icon name='MoneyCollectFilled' {...{ ...props, ...context.attrs }} icon={MoneyCollectFilledSvg} />
);

IconMoneyCollectFilled.displayName = 'IconMoneyCollectFilled';

export default IconMoneyCollectFilled;
