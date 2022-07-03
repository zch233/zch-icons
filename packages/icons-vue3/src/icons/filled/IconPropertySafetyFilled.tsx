// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PropertySafetyFilledSvg from 'icons-base/es/asn/PropertySafetyFilled';

export interface PropertySafetyFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPropertySafetyFilled: PropertySafetyFilledIconType = (props, context) => (
    <Icon name='PropertySafetyFilled' {...{ ...props, ...context.attrs }} icon={PropertySafetyFilledSvg} />
);

IconPropertySafetyFilled.displayName = 'IconPropertySafetyFilled';
IconPropertySafetyFilled.theme = 'filled';
IconPropertySafetyFilled.originName = 'property-safety';

export default IconPropertySafetyFilled;
