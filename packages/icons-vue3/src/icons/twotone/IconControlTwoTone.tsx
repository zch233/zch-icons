// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ControlTwotoneSvg from 'gupo-icons-base/es/asn/ControlTwotone';

export interface ControlTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconControlTwotone: ControlTwotoneIconType = (props, context) => (
    <Icon name='ControlTwotone' {...{ ...props, ...context.attrs }} icon={ControlTwotoneSvg} />
);

IconControlTwotone.displayName = 'IconControlTwotone';
IconControlTwotone.theme = 'twotone';
IconControlTwotone.originName = 'control';

export default IconControlTwotone;
