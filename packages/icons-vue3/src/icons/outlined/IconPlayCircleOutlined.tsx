// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlayCircleOutlinedSvg from 'gupo-icons-base/es/asn/PlayCircleOutlined';

export interface PlayCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPlayCircleOutlined: PlayCircleOutlinedIconType = (props, context) => (
    <Icon name='PlayCircleOutlined' {...{ ...props, ...context.attrs }} icon={PlayCircleOutlinedSvg} />
);

IconPlayCircleOutlined.displayName = 'IconPlayCircleOutlined';
IconPlayCircleOutlined.theme = 'outlined';
IconPlayCircleOutlined.originName = 'play-circle';

export default IconPlayCircleOutlined;
