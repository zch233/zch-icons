// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VideoCameraOutlinedSvg from 'icon-base/es/asn/VideoCameraOutlined';

export interface VideoCameraOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconVideoCameraOutlined: VideoCameraOutlinedIconType = (props, context) => (
    <Icon name='VideoCameraOutlined' {...{ ...props, ...context.attrs }} icon={VideoCameraOutlinedSvg} />
);

IconVideoCameraOutlined.displayName = 'IconVideoCameraOutlined';

export default IconVideoCameraOutlined;
