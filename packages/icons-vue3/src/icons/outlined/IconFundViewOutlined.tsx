// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FundViewOutlinedSvg from 'icons-base/es/asn/FundViewOutlined';

export interface FundViewOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFundViewOutlined: FundViewOutlinedIconType = (props, context) => (
    <Icon name='FundViewOutlined' {...{ ...props, ...context.attrs }} icon={FundViewOutlinedSvg} />
);

IconFundViewOutlined.displayName = 'IconFundViewOutlined';
IconFundViewOutlined.theme = 'outlined';
IconFundViewOutlined.originName = 'fund-view';

export default IconFundViewOutlined;
