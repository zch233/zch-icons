// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FundViewOutlinedSvg from 'icon-base/es/asn/FundViewOutlined';

export interface FundViewOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFundViewOutlined: FundViewOutlinedIconType = (props, context) => (
    <Icon name='FundViewOutlined' {...{ ...props, ...context.attrs }} icon={FundViewOutlinedSvg} />
);

IconFundViewOutlined.displayName = 'IconFundViewOutlined';

export default IconFundViewOutlined;
