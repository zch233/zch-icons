// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AccountBookOutlinedSvg from 'gupo-icons-base/es/asn/AccountBookOutlined';

export interface AccountBookOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAccountBookOutlined: AccountBookOutlinedIconType = (props, context) => (
    <Icon name='AccountBookOutlined' {...{ ...props, ...context.attrs }} icon={AccountBookOutlinedSvg} />
);

IconAccountBookOutlined.displayName = 'IconAccountBookOutlined';
IconAccountBookOutlined.theme = 'outlined';
IconAccountBookOutlined.originName = 'account-book';

export default IconAccountBookOutlined;
