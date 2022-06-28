// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SettingOutlinedSvg from 'gupo-icons-base/es/asn/SettingOutlined';

export interface SettingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSettingOutlined: SettingOutlinedIconType = (props, context) => (
    <Icon name='SettingOutlined' {...{ ...props, ...context.attrs }} icon={SettingOutlinedSvg} />
);

IconSettingOutlined.displayName = 'IconSettingOutlined';
IconSettingOutlined.theme = 'outlined';
IconSettingOutlined.originName = 'setting';

export default IconSettingOutlined;
