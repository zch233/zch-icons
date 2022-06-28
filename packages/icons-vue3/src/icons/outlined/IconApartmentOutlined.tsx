// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ApartmentOutlinedSvg from 'gupo-icons-base/es/asn/ApartmentOutlined';

export interface ApartmentOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconApartmentOutlined: ApartmentOutlinedIconType = (props, context) => (
    <Icon name='ApartmentOutlined' {...{ ...props, ...context.attrs }} icon={ApartmentOutlinedSvg} />
);

IconApartmentOutlined.displayName = 'IconApartmentOutlined';
IconApartmentOutlined.theme = 'outlined';
IconApartmentOutlined.originName = 'apartment';

export default IconApartmentOutlined;
