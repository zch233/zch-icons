// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FundFilledSvg from 'gupo-icons-base/es/asn/FundFilled';

export interface FundFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFundFilled: FundFilledIconType = (props, context) => <Icon name='FundFilled' {...{ ...props, ...context.attrs }} icon={FundFilledSvg} />;

IconFundFilled.displayName = 'IconFundFilled';
IconFundFilled.theme = 'filled';
IconFundFilled.originName = 'fund';

export default IconFundFilled;
