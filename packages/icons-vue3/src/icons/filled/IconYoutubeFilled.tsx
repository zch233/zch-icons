// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import YoutubeFilledSvg from 'icon-base/es/asn/YoutubeFilled';

export interface YoutubeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconYoutubeFilled: YoutubeFilledIconType = (props, context) => <Icon name='YoutubeFilled' {...{ ...props, ...context.attrs }} icon={YoutubeFilledSvg} />;

IconYoutubeFilled.displayName = 'IconYoutubeFilled';

export default IconYoutubeFilled;
