// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ApartmentOutlinedSvg from 'icon-base/es/asn/ApartmentOutlined';

export interface ApartmentOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconApartmentOutlined: ApartmentOutlinedIconType = (props, context) => (
    <Icon name='ApartmentOutlined' {...{ ...props, ...context.attrs }} icon={ApartmentOutlinedSvg} />
);

IconApartmentOutlined.displayName = 'IconApartmentOutlined';

export default IconApartmentOutlined;
