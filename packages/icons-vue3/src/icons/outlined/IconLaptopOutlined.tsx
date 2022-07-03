// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LaptopOutlinedSvg from 'icons-base/es/asn/LaptopOutlined';

export interface LaptopOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLaptopOutlined: LaptopOutlinedIconType = (props, context) => (
    <Icon name='LaptopOutlined' {...{ ...props, ...context.attrs }} icon={LaptopOutlinedSvg} />
);

IconLaptopOutlined.displayName = 'IconLaptopOutlined';
IconLaptopOutlined.theme = 'outlined';
IconLaptopOutlined.originName = 'laptop';

export default IconLaptopOutlined;
