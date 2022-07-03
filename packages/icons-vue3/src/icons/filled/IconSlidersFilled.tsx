// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SlidersFilledSvg from 'icons-base/es/asn/SlidersFilled';

export interface SlidersFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSlidersFilled: SlidersFilledIconType = (props, context) => <Icon name='SlidersFilled' {...{ ...props, ...context.attrs }} icon={SlidersFilledSvg} />;

IconSlidersFilled.displayName = 'IconSlidersFilled';
IconSlidersFilled.theme = 'filled';
IconSlidersFilled.originName = 'sliders';

export default IconSlidersFilled;
