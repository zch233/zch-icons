// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PropertySafetyOutlinedSvg from 'icon-base/es/asn/PropertySafetyOutlined';

export interface PropertySafetyOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPropertySafetyOutlined: PropertySafetyOutlinedIconType = (props, context) => (
    <Icon name='PropertySafetyOutlined' {...{ ...props, ...context.attrs }} icon={PropertySafetyOutlinedSvg} />
);

IconPropertySafetyOutlined.displayName = 'IconPropertySafetyOutlined';

export default IconPropertySafetyOutlined;
