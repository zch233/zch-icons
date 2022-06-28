// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PropertySafetyOutlinedSvg from 'gupo-icons-base/es/asn/PropertySafetyOutlined';

export interface PropertySafetyOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPropertySafetyOutlined: PropertySafetyOutlinedIconType = (props, context) => (
    <Icon name='PropertySafetyOutlined' {...{ ...props, ...context.attrs }} icon={PropertySafetyOutlinedSvg} />
);

IconPropertySafetyOutlined.displayName = 'IconPropertySafetyOutlined';
IconPropertySafetyOutlined.theme = 'outlined';
IconPropertySafetyOutlined.originName = 'property-safety';

export default IconPropertySafetyOutlined;
