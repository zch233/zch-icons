// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FlagFilledSvg from 'icons-base/es/asn/FlagFilled';

export interface FlagFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFlagFilled: FlagFilledIconType = (props, context) => <Icon name='FlagFilled' {...{ ...props, ...context.attrs }} icon={FlagFilledSvg} />;

IconFlagFilled.displayName = 'IconFlagFilled';
IconFlagFilled.theme = 'filled';
IconFlagFilled.originName = 'flag';

export default IconFlagFilled;
