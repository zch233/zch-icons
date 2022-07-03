// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SwapOutlinedSvg from 'icons-base/es/asn/SwapOutlined';

export interface SwapOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSwapOutlined: SwapOutlinedIconType = (props, context) => <Icon name='SwapOutlined' {...{ ...props, ...context.attrs }} icon={SwapOutlinedSvg} />;

IconSwapOutlined.displayName = 'IconSwapOutlined';
IconSwapOutlined.theme = 'outlined';
IconSwapOutlined.originName = 'swap';

export default IconSwapOutlined;
