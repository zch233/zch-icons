// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FundOutlinedSvg from 'icons-base/es/asn/FundOutlined';

export interface FundOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFundOutlined: FundOutlinedIconType = (props, context) => <Icon name='FundOutlined' {...{ ...props, ...context.attrs }} icon={FundOutlinedSvg} />;

IconFundOutlined.displayName = 'IconFundOutlined';
IconFundOutlined.theme = 'outlined';
IconFundOutlined.originName = 'fund';

export default IconFundOutlined;
