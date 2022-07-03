// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import YoutubeOutlinedSvg from 'icons-base/es/asn/YoutubeOutlined';

export interface YoutubeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconYoutubeOutlined: YoutubeOutlinedIconType = (props, context) => (
    <Icon name='YoutubeOutlined' {...{ ...props, ...context.attrs }} icon={YoutubeOutlinedSvg} />
);

IconYoutubeOutlined.displayName = 'IconYoutubeOutlined';
IconYoutubeOutlined.theme = 'outlined';
IconYoutubeOutlined.originName = 'youtube';

export default IconYoutubeOutlined;
