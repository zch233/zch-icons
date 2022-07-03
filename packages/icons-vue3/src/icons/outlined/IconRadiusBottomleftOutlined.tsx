// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RadiusBottomleftOutlinedSvg from 'icons-base/es/asn/RadiusBottomleftOutlined';

export interface RadiusBottomleftOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRadiusBottomleftOutlined: RadiusBottomleftOutlinedIconType = (props, context) => (
    <Icon name='RadiusBottomleftOutlined' {...{ ...props, ...context.attrs }} icon={RadiusBottomleftOutlinedSvg} />
);

IconRadiusBottomleftOutlined.displayName = 'IconRadiusBottomleftOutlined';
IconRadiusBottomleftOutlined.theme = 'outlined';
IconRadiusBottomleftOutlined.originName = 'radius-bottomleft';

export default IconRadiusBottomleftOutlined;
