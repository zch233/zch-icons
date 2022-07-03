// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MoneyCollectTwotoneSvg from 'icons-base/es/asn/MoneyCollectTwotone';

export interface MoneyCollectTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMoneyCollectTwotone: MoneyCollectTwotoneIconType = (props, context) => (
    <Icon name='MoneyCollectTwotone' {...{ ...props, ...context.attrs }} icon={MoneyCollectTwotoneSvg} />
);

IconMoneyCollectTwotone.displayName = 'IconMoneyCollectTwotone';
IconMoneyCollectTwotone.theme = 'twotone';
IconMoneyCollectTwotone.originName = 'money-collect';

export default IconMoneyCollectTwotone;
