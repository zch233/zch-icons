// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MoneyCollectTwoToneSvg from 'icon-base/es/asn/MoneyCollectTwoTone';

export interface MoneyCollectTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMoneyCollectTwoTone: MoneyCollectTwoToneIconType = (props, context) => (
    <Icon name='MoneyCollectTwoTone' {...{ ...props, ...context.attrs }} icon={MoneyCollectTwoToneSvg} />
);

IconMoneyCollectTwoTone.displayName = 'IconMoneyCollectTwoTone';

export default IconMoneyCollectTwoTone;
