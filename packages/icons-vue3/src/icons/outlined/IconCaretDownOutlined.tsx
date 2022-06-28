// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CaretDownOutlinedSvg from 'gupo-icons-base/es/asn/CaretDownOutlined';

export interface CaretDownOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCaretDownOutlined: CaretDownOutlinedIconType = (props, context) => (
    <Icon name='CaretDownOutlined' {...{ ...props, ...context.attrs }} icon={CaretDownOutlinedSvg} />
);

IconCaretDownOutlined.displayName = 'IconCaretDownOutlined';
IconCaretDownOutlined.theme = 'outlined';
IconCaretDownOutlined.originName = 'caret-down';

export default IconCaretDownOutlined;
