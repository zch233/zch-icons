// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SettingOutlinedSvg from 'icon-base/es/asn/SettingOutlined';

export interface SettingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSettingOutlined: SettingOutlinedIconType = (props, context) => (
    <Icon name='SettingOutlined' {...{ ...props, ...context.attrs }} icon={SettingOutlinedSvg} />
);

IconSettingOutlined.displayName = 'IconSettingOutlined';

export default IconSettingOutlined;
