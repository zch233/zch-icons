// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RadiusBottomrightOutlinedSvg from 'icons-base/es/asn/RadiusBottomrightOutlined';

export interface RadiusBottomrightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRadiusBottomrightOutlined: RadiusBottomrightOutlinedIconType = (props, context) => (
    <Icon name='RadiusBottomrightOutlined' {...{ ...props, ...context.attrs }} icon={RadiusBottomrightOutlinedSvg} />
);

IconRadiusBottomrightOutlined.displayName = 'IconRadiusBottomrightOutlined';
IconRadiusBottomrightOutlined.theme = 'outlined';
IconRadiusBottomrightOutlined.originName = 'radius-bottomright';

export default IconRadiusBottomrightOutlined;
