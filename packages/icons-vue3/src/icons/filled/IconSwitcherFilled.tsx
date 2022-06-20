// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SwitcherFilledSvg from 'icon-base/es/asn/SwitcherFilled';

export interface SwitcherFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSwitcherFilled: SwitcherFilledIconType = (props, context) => (
    <Icon name='SwitcherFilled' {...{ ...props, ...context.attrs }} icon={SwitcherFilledSvg} />
);

IconSwitcherFilled.displayName = 'IconSwitcherFilled';

export default IconSwitcherFilled;
