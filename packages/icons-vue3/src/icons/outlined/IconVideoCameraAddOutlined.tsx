// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VideoCameraAddOutlinedSvg from 'icon-base/es/asn/VideoCameraAddOutlined';

export interface VideoCameraAddOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconVideoCameraAddOutlined: VideoCameraAddOutlinedIconType = (props, context) => (
    <Icon name='VideoCameraAddOutlined' {...{ ...props, ...context.attrs }} icon={VideoCameraAddOutlinedSvg} />
);

IconVideoCameraAddOutlined.displayName = 'IconVideoCameraAddOutlined';

export default IconVideoCameraAddOutlined;
