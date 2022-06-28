// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CaretDownFilledSvg from 'gupo-icons-base/es/asn/CaretDownFilled';

export interface CaretDownFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCaretDownFilled: CaretDownFilledIconType = (props, context) => (
    <Icon name='CaretDownFilled' {...{ ...props, ...context.attrs }} icon={CaretDownFilledSvg} />
);

IconCaretDownFilled.displayName = 'IconCaretDownFilled';
IconCaretDownFilled.theme = 'filled';
IconCaretDownFilled.originName = 'caret-down';

export default IconCaretDownFilled;
