// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CompassOutlinedSvg from 'gupo-icons-base/es/asn/CompassOutlined';

export interface CompassOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCompassOutlined: CompassOutlinedIconType = (props, context) => (
    <Icon name='CompassOutlined' {...{ ...props, ...context.attrs }} icon={CompassOutlinedSvg} />
);

IconCompassOutlined.displayName = 'IconCompassOutlined';
IconCompassOutlined.theme = 'outlined';
IconCompassOutlined.originName = 'compass';

export default IconCompassOutlined;
