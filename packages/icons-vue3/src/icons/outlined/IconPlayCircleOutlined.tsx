// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PlayCircleOutlinedSvg from 'icon-base/es/asn/PlayCircleOutlined';

export interface PlayCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPlayCircleOutlined: PlayCircleOutlinedIconType = (props, context) => (
    <Icon name='PlayCircleOutlined' {...{ ...props, ...context.attrs }} icon={PlayCircleOutlinedSvg} />
);

IconPlayCircleOutlined.displayName = 'IconPlayCircleOutlined';

export default IconPlayCircleOutlined;
