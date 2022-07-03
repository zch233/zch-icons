// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GifOutlinedSvg from 'icons-base/es/asn/GifOutlined';

export interface GifOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGifOutlined: GifOutlinedIconType = (props, context) => <Icon name='GifOutlined' {...{ ...props, ...context.attrs }} icon={GifOutlinedSvg} />;

IconGifOutlined.displayName = 'IconGifOutlined';
IconGifOutlined.theme = 'outlined';
IconGifOutlined.originName = 'gif';

export default IconGifOutlined;
