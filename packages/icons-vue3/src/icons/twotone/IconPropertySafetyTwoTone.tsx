// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PropertySafetyTwoToneSvg from 'icon-base/es/asn/PropertySafetyTwoTone';

export interface PropertySafetyTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPropertySafetyTwoTone: PropertySafetyTwoToneIconType = (props, context) => (
    <Icon name='PropertySafetyTwoTone' {...{ ...props, ...context.attrs }} icon={PropertySafetyTwoToneSvg} />
);

IconPropertySafetyTwoTone.displayName = 'IconPropertySafetyTwoTone';

export default IconPropertySafetyTwoTone;
