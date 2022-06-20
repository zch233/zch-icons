// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SettingTwoToneSvg from 'icon-base/es/asn/SettingTwoTone';

export interface SettingTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSettingTwoTone: SettingTwoToneIconType = (props, context) => (
    <Icon name='SettingTwoTone' {...{ ...props, ...context.attrs }} icon={SettingTwoToneSvg} />
);

IconSettingTwoTone.displayName = 'IconSettingTwoTone';

export default IconSettingTwoTone;
