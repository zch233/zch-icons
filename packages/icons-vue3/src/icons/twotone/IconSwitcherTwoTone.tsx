// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SwitcherTwoToneSvg from 'icon-base/es/asn/SwitcherTwoTone';

export interface SwitcherTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSwitcherTwoTone: SwitcherTwoToneIconType = (props, context) => (
    <Icon name='SwitcherTwoTone' {...{ ...props, ...context.attrs }} icon={SwitcherTwoToneSvg} />
);

IconSwitcherTwoTone.displayName = 'IconSwitcherTwoTone';

export default IconSwitcherTwoTone;
