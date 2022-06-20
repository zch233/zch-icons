// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BackwardFilledSvg from 'icon-base/es/asn/BackwardFilled';

export interface BackwardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBackwardFilled: BackwardFilledIconType = (props, context) => (
    <Icon name='BackwardFilled' {...{ ...props, ...context.attrs }} icon={BackwardFilledSvg} />
);

IconBackwardFilled.displayName = 'IconBackwardFilled';

export default IconBackwardFilled;
