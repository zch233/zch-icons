// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AccountBookFilledSvg from 'icons-base/es/asn/AccountBookFilled';

export interface AccountBookFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAccountBookFilled: AccountBookFilledIconType = (props, context) => (
    <Icon name='AccountBookFilled' {...{ ...props, ...context.attrs }} icon={AccountBookFilledSvg} />
);

IconAccountBookFilled.displayName = 'IconAccountBookFilled';
IconAccountBookFilled.theme = 'filled';
IconAccountBookFilled.originName = 'account-book';

export default IconAccountBookFilled;
