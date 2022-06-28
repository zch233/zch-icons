// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SlidersOutlinedSvg from 'gupo-icons-base/es/asn/SlidersOutlined';

export interface SlidersOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSlidersOutlined: SlidersOutlinedIconType = (props, context) => (
    <Icon name='SlidersOutlined' {...{ ...props, ...context.attrs }} icon={SlidersOutlinedSvg} />
);

IconSlidersOutlined.displayName = 'IconSlidersOutlined';
IconSlidersOutlined.theme = 'outlined';
IconSlidersOutlined.originName = 'sliders';

export default IconSlidersOutlined;
