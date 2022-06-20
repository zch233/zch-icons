// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AccountBookFilledSvg from 'icon-base/es/asn/AccountBookFilled';

export interface AccountBookFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAccountBookFilled: AccountBookFilledIconType = (props, context) => (
    <Icon name='AccountBookFilled' {...{ ...props, ...context.attrs }} icon={AccountBookFilledSvg} />
);

IconAccountBookFilled.displayName = 'IconAccountBookFilled';

export default IconAccountBookFilled;
