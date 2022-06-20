// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SwitcherOutlinedSvg from 'icon-base/es/asn/SwitcherOutlined';

export interface SwitcherOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSwitcherOutlined: SwitcherOutlinedIconType = (props, context) => (
    <Icon name='SwitcherOutlined' {...{ ...props, ...context.attrs }} icon={SwitcherOutlinedSvg} />
);

IconSwitcherOutlined.displayName = 'IconSwitcherOutlined';

export default IconSwitcherOutlined;
