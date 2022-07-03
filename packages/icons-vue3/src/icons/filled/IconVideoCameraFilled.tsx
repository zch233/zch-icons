// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VideoCameraFilledSvg from 'icons-base/es/asn/VideoCameraFilled';

export interface VideoCameraFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconVideoCameraFilled: VideoCameraFilledIconType = (props, context) => (
    <Icon name='VideoCameraFilled' {...{ ...props, ...context.attrs }} icon={VideoCameraFilledSvg} />
);

IconVideoCameraFilled.displayName = 'IconVideoCameraFilled';
IconVideoCameraFilled.theme = 'filled';
IconVideoCameraFilled.originName = 'video-camera';

export default IconVideoCameraFilled;
