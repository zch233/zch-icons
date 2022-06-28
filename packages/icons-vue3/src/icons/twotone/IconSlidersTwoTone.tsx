// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SlidersTwotoneSvg from 'gupo-icons-base/es/asn/SlidersTwotone';

export interface SlidersTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSlidersTwotone: SlidersTwotoneIconType = (props, context) => (
    <Icon name='SlidersTwotone' {...{ ...props, ...context.attrs }} icon={SlidersTwotoneSvg} />
);

IconSlidersTwotone.displayName = 'IconSlidersTwotone';
IconSlidersTwotone.theme = 'twotone';
IconSlidersTwotone.originName = 'sliders';

export default IconSlidersTwotone;
