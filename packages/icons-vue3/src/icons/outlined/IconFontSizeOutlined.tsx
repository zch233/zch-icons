// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FontSizeOutlinedSvg from 'icon-base/es/asn/FontSizeOutlined';

export interface FontSizeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFontSizeOutlined: FontSizeOutlinedIconType = (props, context) => (
    <Icon name='FontSizeOutlined' {...{ ...props, ...context.attrs }} icon={FontSizeOutlinedSvg} />
);

IconFontSizeOutlined.displayName = 'IconFontSizeOutlined';

export default IconFontSizeOutlined;
