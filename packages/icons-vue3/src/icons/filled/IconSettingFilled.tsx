// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SettingFilledSvg from 'gupo-icons-base/es/asn/SettingFilled';

export interface SettingFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSettingFilled: SettingFilledIconType = (props, context) => <Icon name='SettingFilled' {...{ ...props, ...context.attrs }} icon={SettingFilledSvg} />;

IconSettingFilled.displayName = 'IconSettingFilled';
IconSettingFilled.theme = 'filled';
IconSettingFilled.originName = 'setting';

export default IconSettingFilled;
