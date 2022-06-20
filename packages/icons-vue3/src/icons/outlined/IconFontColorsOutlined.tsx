// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FontColorsOutlinedSvg from 'icon-base/es/asn/FontColorsOutlined';

export interface FontColorsOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFontColorsOutlined: FontColorsOutlinedIconType = (props, context) => (
    <Icon name='FontColorsOutlined' {...{ ...props, ...context.attrs }} icon={FontColorsOutlinedSvg} />
);

IconFontColorsOutlined.displayName = 'IconFontColorsOutlined';

export default IconFontColorsOutlined;
