// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PoweroffOutlinedSvg from 'icon-base/es/asn/PoweroffOutlined';

export interface PoweroffOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPoweroffOutlined: PoweroffOutlinedIconType = (props, context) => (
    <Icon name='PoweroffOutlined' {...{ ...props, ...context.attrs }} icon={PoweroffOutlinedSvg} />
);

IconPoweroffOutlined.displayName = 'IconPoweroffOutlined';

export default IconPoweroffOutlined;
