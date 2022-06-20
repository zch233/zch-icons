// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FundProjectionScreenOutlinedSvg from 'icon-base/es/asn/FundProjectionScreenOutlined';

export interface FundProjectionScreenOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFundProjectionScreenOutlined: FundProjectionScreenOutlinedIconType = (props, context) => (
    <Icon name='FundProjectionScreenOutlined' {...{ ...props, ...context.attrs }} icon={FundProjectionScreenOutlinedSvg} />
);

IconFundProjectionScreenOutlined.displayName = 'IconFundProjectionScreenOutlined';

export default IconFundProjectionScreenOutlined;
