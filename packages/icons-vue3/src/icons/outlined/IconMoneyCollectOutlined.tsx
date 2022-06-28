// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MoneyCollectOutlinedSvg from 'gupo-icons-base/es/asn/MoneyCollectOutlined';

export interface MoneyCollectOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMoneyCollectOutlined: MoneyCollectOutlinedIconType = (props, context) => (
    <Icon name='MoneyCollectOutlined' {...{ ...props, ...context.attrs }} icon={MoneyCollectOutlinedSvg} />
);

IconMoneyCollectOutlined.displayName = 'IconMoneyCollectOutlined';
IconMoneyCollectOutlined.theme = 'outlined';
IconMoneyCollectOutlined.originName = 'money-collect';

export default IconMoneyCollectOutlined;
