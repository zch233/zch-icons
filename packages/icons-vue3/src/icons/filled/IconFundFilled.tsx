// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FundFilledSvg from 'icon-base/es/asn/FundFilled';

export interface FundFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFundFilled: FundFilledIconType = (props, context) => <Icon name='FundFilled' {...{ ...props, ...context.attrs }} icon={FundFilledSvg} />;

IconFundFilled.displayName = 'IconFundFilled';

export default IconFundFilled;
