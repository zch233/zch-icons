// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ControlFilledSvg from 'gupo-icons-base/es/asn/ControlFilled';

export interface ControlFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconControlFilled: ControlFilledIconType = (props, context) => <Icon name='ControlFilled' {...{ ...props, ...context.attrs }} icon={ControlFilledSvg} />;

IconControlFilled.displayName = 'IconControlFilled';
IconControlFilled.theme = 'filled';
IconControlFilled.originName = 'control';

export default IconControlFilled;
