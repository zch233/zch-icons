// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FontSizeOutlinedSvg from 'gupo-icons-base/es/asn/FontSizeOutlined';

export interface FontSizeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFontSizeOutlined: FontSizeOutlinedIconType = (props, context) => (
    <Icon name='FontSizeOutlined' {...{ ...props, ...context.attrs }} icon={FontSizeOutlinedSvg} />
);

IconFontSizeOutlined.displayName = 'IconFontSizeOutlined';
IconFontSizeOutlined.theme = 'outlined';
IconFontSizeOutlined.originName = 'font-size';

export default IconFontSizeOutlined;
