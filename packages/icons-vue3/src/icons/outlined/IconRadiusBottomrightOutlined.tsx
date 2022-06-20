// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RadiusBottomrightOutlinedSvg from 'icon-base/es/asn/RadiusBottomrightOutlined';

export interface RadiusBottomrightOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRadiusBottomrightOutlined: RadiusBottomrightOutlinedIconType = (props, context) => (
    <Icon name='RadiusBottomrightOutlined' {...{ ...props, ...context.attrs }} icon={RadiusBottomrightOutlinedSvg} />
);

IconRadiusBottomrightOutlined.displayName = 'IconRadiusBottomrightOutlined';

export default IconRadiusBottomrightOutlined;
