// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FontColorsOutlinedSvg from 'icons-base/es/asn/FontColorsOutlined';

export interface FontColorsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFontColorsOutlined: FontColorsOutlinedIconType = (props, context) => (
    <Icon name='FontColorsOutlined' {...{ ...props, ...context.attrs }} icon={FontColorsOutlinedSvg} />
);

IconFontColorsOutlined.displayName = 'IconFontColorsOutlined';
IconFontColorsOutlined.theme = 'outlined';
IconFontColorsOutlined.originName = 'font-colors';

export default IconFontColorsOutlined;
