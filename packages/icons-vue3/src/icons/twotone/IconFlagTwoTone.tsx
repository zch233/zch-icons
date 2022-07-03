// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FlagTwotoneSvg from 'icons-base/es/asn/FlagTwotone';

export interface FlagTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFlagTwotone: FlagTwotoneIconType = (props, context) => <Icon name='FlagTwotone' {...{ ...props, ...context.attrs }} icon={FlagTwotoneSvg} />;

IconFlagTwotone.displayName = 'IconFlagTwotone';
IconFlagTwotone.theme = 'twotone';
IconFlagTwotone.originName = 'flag';

export default IconFlagTwotone;
