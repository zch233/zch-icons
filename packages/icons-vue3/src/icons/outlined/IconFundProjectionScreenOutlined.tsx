// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FundProjectionScreenOutlinedSvg from 'gupo-icons-base/es/asn/FundProjectionScreenOutlined';

export interface FundProjectionScreenOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFundProjectionScreenOutlined: FundProjectionScreenOutlinedIconType = (props, context) => (
    <Icon name='FundProjectionScreenOutlined' {...{ ...props, ...context.attrs }} icon={FundProjectionScreenOutlinedSvg} />
);

IconFundProjectionScreenOutlined.displayName = 'IconFundProjectionScreenOutlined';
IconFundProjectionScreenOutlined.theme = 'outlined';
IconFundProjectionScreenOutlined.originName = 'fund-projection-screen';

export default IconFundProjectionScreenOutlined;
