// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TransactionOutlinedSvg from 'icons-base/es/asn/TransactionOutlined';

export interface TransactionOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTransactionOutlined: TransactionOutlinedIconType = (props, context) => (
    <Icon name='TransactionOutlined' {...{ ...props, ...context.attrs }} icon={TransactionOutlinedSvg} />
);

IconTransactionOutlined.displayName = 'IconTransactionOutlined';
IconTransactionOutlined.theme = 'outlined';
IconTransactionOutlined.originName = 'transaction';

export default IconTransactionOutlined;
