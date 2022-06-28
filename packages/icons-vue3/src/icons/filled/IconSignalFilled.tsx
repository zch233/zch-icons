// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SignalFilledSvg from 'gupo-icons-base/es/asn/SignalFilled';

export interface SignalFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSignalFilled: SignalFilledIconType = (props, context) => <Icon name='SignalFilled' {...{ ...props, ...context.attrs }} icon={SignalFilledSvg} />;

IconSignalFilled.displayName = 'IconSignalFilled';
IconSignalFilled.theme = 'filled';
IconSignalFilled.originName = 'signal';

export default IconSignalFilled;
