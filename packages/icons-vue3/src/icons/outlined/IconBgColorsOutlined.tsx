// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BgColorsOutlinedSvg from 'icons-base/es/asn/BgColorsOutlined';

export interface BgColorsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBgColorsOutlined: BgColorsOutlinedIconType = (props, context) => (
    <Icon name='BgColorsOutlined' {...{ ...props, ...context.attrs }} icon={BgColorsOutlinedSvg} />
);

IconBgColorsOutlined.displayName = 'IconBgColorsOutlined';
IconBgColorsOutlined.theme = 'outlined';
IconBgColorsOutlined.originName = 'bg-colors';

export default IconBgColorsOutlined;
