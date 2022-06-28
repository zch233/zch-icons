// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FundTwotoneSvg from 'gupo-icons-base/es/asn/FundTwotone';

export interface FundTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFundTwotone: FundTwotoneIconType = (props, context) => <Icon name='FundTwotone' {...{ ...props, ...context.attrs }} icon={FundTwotoneSvg} />;

IconFundTwotone.displayName = 'IconFundTwotone';
IconFundTwotone.theme = 'twotone';
IconFundTwotone.originName = 'fund';

export default IconFundTwotone;
