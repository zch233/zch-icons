// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SwitcherTwotoneSvg from 'icons-base/es/asn/SwitcherTwotone';

export interface SwitcherTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSwitcherTwotone: SwitcherTwotoneIconType = (props, context) => (
    <Icon name='SwitcherTwotone' {...{ ...props, ...context.attrs }} icon={SwitcherTwotoneSvg} />
);

IconSwitcherTwotone.displayName = 'IconSwitcherTwotone';
IconSwitcherTwotone.theme = 'twotone';
IconSwitcherTwotone.originName = 'switcher';

export default IconSwitcherTwotone;
