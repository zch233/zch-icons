// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FundOutlinedSvg from 'icon-base/es/asn/FundOutlined';

export interface FundOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFundOutlined: FundOutlinedIconType = (props, context) => <Icon name='FundOutlined' {...{ ...props, ...context.attrs }} icon={FundOutlinedSvg} />;

IconFundOutlined.displayName = 'IconFundOutlined';

export default IconFundOutlined;
