// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SwapLeftOutlinedSvg from 'icons-base/es/asn/SwapLeftOutlined';

export interface SwapLeftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSwapLeftOutlined: SwapLeftOutlinedIconType = (props, context) => (
    <Icon name='SwapLeftOutlined' {...{ ...props, ...context.attrs }} icon={SwapLeftOutlinedSvg} />
);

IconSwapLeftOutlined.displayName = 'IconSwapLeftOutlined';
IconSwapLeftOutlined.theme = 'outlined';
IconSwapLeftOutlined.originName = 'swap-left';

export default IconSwapLeftOutlined;
