// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RadiusSettingOutlinedSvg from 'icon-base/es/asn/RadiusSettingOutlined';

export interface RadiusSettingOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRadiusSettingOutlined: RadiusSettingOutlinedIconType = (props, context) => (
    <Icon name='RadiusSettingOutlined' {...{ ...props, ...context.attrs }} icon={RadiusSettingOutlinedSvg} />
);

IconRadiusSettingOutlined.displayName = 'IconRadiusSettingOutlined';

export default IconRadiusSettingOutlined;
