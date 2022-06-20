// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PropertySafetyFilledSvg from 'icon-base/es/asn/PropertySafetyFilled';

export interface PropertySafetyFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPropertySafetyFilled: PropertySafetyFilledIconType = (props, context) => (
    <Icon name='PropertySafetyFilled' {...{ ...props, ...context.attrs }} icon={PropertySafetyFilledSvg} />
);

IconPropertySafetyFilled.displayName = 'IconPropertySafetyFilled';

export default IconPropertySafetyFilled;
