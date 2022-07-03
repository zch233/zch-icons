// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AccountBookTwotoneSvg from 'icons-base/es/asn/AccountBookTwotone';

export interface AccountBookTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAccountBookTwotone: AccountBookTwotoneIconType = (props, context) => (
    <Icon name='AccountBookTwotone' {...{ ...props, ...context.attrs }} icon={AccountBookTwotoneSvg} />
);

IconAccountBookTwotone.displayName = 'IconAccountBookTwotone';
IconAccountBookTwotone.theme = 'twotone';
IconAccountBookTwotone.originName = 'account-book';

export default IconAccountBookTwotone;
