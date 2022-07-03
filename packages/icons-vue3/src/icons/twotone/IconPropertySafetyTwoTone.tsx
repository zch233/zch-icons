// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PropertySafetyTwotoneSvg from 'icons-base/es/asn/PropertySafetyTwotone';

export interface PropertySafetyTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPropertySafetyTwotone: PropertySafetyTwotoneIconType = (props, context) => (
    <Icon name='PropertySafetyTwotone' {...{ ...props, ...context.attrs }} icon={PropertySafetyTwotoneSvg} />
);

IconPropertySafetyTwotone.displayName = 'IconPropertySafetyTwotone';
IconPropertySafetyTwotone.theme = 'twotone';
IconPropertySafetyTwotone.originName = 'property-safety';

export default IconPropertySafetyTwotone;
