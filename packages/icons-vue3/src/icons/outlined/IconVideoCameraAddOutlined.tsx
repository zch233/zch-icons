// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VideoCameraAddOutlinedSvg from 'icons-base/es/asn/VideoCameraAddOutlined';

export interface VideoCameraAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconVideoCameraAddOutlined: VideoCameraAddOutlinedIconType = (props, context) => (
    <Icon name='VideoCameraAddOutlined' {...{ ...props, ...context.attrs }} icon={VideoCameraAddOutlinedSvg} />
);

IconVideoCameraAddOutlined.displayName = 'IconVideoCameraAddOutlined';
IconVideoCameraAddOutlined.theme = 'outlined';
IconVideoCameraAddOutlined.originName = 'video-camera-add';

export default IconVideoCameraAddOutlined;
