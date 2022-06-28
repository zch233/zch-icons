// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RadiusUpleftOutlinedSvg from 'gupo-icons-base/es/asn/RadiusUpleftOutlined';

export interface RadiusUpleftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRadiusUpleftOutlined: RadiusUpleftOutlinedIconType = (props, context) => (
    <Icon name='RadiusUpleftOutlined' {...{ ...props, ...context.attrs }} icon={RadiusUpleftOutlinedSvg} />
);

IconRadiusUpleftOutlined.displayName = 'IconRadiusUpleftOutlined';
IconRadiusUpleftOutlined.theme = 'outlined';
IconRadiusUpleftOutlined.originName = 'radius-upleft';

export default IconRadiusUpleftOutlined;
