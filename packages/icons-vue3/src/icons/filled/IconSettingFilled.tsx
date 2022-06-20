// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SettingFilledSvg from 'icon-base/es/asn/SettingFilled';

export interface SettingFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSettingFilled: SettingFilledIconType = (props, context) => <Icon name='SettingFilled' {...{ ...props, ...context.attrs }} icon={SettingFilledSvg} />;

IconSettingFilled.displayName = 'IconSettingFilled';

export default IconSettingFilled;
