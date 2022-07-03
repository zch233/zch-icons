// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FastBackwardFilledSvg from 'icons-base/es/asn/FastBackwardFilled';

export interface FastBackwardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFastBackwardFilled: FastBackwardFilledIconType = (props, context) => (
    <Icon name='FastBackwardFilled' {...{ ...props, ...context.attrs }} icon={FastBackwardFilledSvg} />
);

IconFastBackwardFilled.displayName = 'IconFastBackwardFilled';
IconFastBackwardFilled.theme = 'filled';
IconFastBackwardFilled.originName = 'fast-backward';

export default IconFastBackwardFilled;
