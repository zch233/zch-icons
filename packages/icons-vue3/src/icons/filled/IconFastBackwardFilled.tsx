// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FastBackwardFilledSvg from 'icon-base/es/asn/FastBackwardFilled';

export interface FastBackwardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFastBackwardFilled: FastBackwardFilledIconType = (props, context) => (
    <Icon name='FastBackwardFilled' {...{ ...props, ...context.attrs }} icon={FastBackwardFilledSvg} />
);

IconFastBackwardFilled.displayName = 'IconFastBackwardFilled';

export default IconFastBackwardFilled;
