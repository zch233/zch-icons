// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ForwardFilledSvg from 'icons-base/es/asn/ForwardFilled';

export interface ForwardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconForwardFilled: ForwardFilledIconType = (props, context) => <Icon name='ForwardFilled' {...{ ...props, ...context.attrs }} icon={ForwardFilledSvg} />;

IconForwardFilled.displayName = 'IconForwardFilled';
IconForwardFilled.theme = 'filled';
IconForwardFilled.originName = 'forward';

export default IconForwardFilled;
