// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import YoutubeOutlinedSvg from 'icon-base/es/asn/YoutubeOutlined';

export interface YoutubeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconYoutubeOutlined: YoutubeOutlinedIconType = (props, context) => (
    <Icon name='YoutubeOutlined' {...{ ...props, ...context.attrs }} icon={YoutubeOutlinedSvg} />
);

IconYoutubeOutlined.displayName = 'IconYoutubeOutlined';

export default IconYoutubeOutlined;
