// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SwapRightOutlinedSvg from 'icon-base/es/asn/SwapRightOutlined';

export interface SwapRightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSwapRightOutlined: SwapRightOutlinedIconType = (props, context) => (
    <Icon name='SwapRightOutlined' {...{ ...props, ...context.attrs }} icon={SwapRightOutlinedSvg} />
);

IconSwapRightOutlined.displayName = 'IconSwapRightOutlined';

export default IconSwapRightOutlined;
