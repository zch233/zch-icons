// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SwitcherOutlinedSvg from 'gupo-icons-base/es/asn/SwitcherOutlined';

export interface SwitcherOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSwitcherOutlined: SwitcherOutlinedIconType = (props, context) => (
    <Icon name='SwitcherOutlined' {...{ ...props, ...context.attrs }} icon={SwitcherOutlinedSvg} />
);

IconSwitcherOutlined.displayName = 'IconSwitcherOutlined';
IconSwitcherOutlined.theme = 'outlined';
IconSwitcherOutlined.originName = 'switcher';

export default IconSwitcherOutlined;
