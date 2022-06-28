// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SettingTwotoneSvg from 'gupo-icons-base/es/asn/SettingTwotone';

export interface SettingTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSettingTwotone: SettingTwotoneIconType = (props, context) => (
    <Icon name='SettingTwotone' {...{ ...props, ...context.attrs }} icon={SettingTwotoneSvg} />
);

IconSettingTwotone.displayName = 'IconSettingTwotone';
IconSettingTwotone.theme = 'twotone';
IconSettingTwotone.originName = 'setting';

export default IconSettingTwotone;
