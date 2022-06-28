// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VideoCameraTwotoneSvg from 'gupo-icons-base/es/asn/VideoCameraTwotone';

export interface VideoCameraTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconVideoCameraTwotone: VideoCameraTwotoneIconType = (props, context) => (
    <Icon name='VideoCameraTwotone' {...{ ...props, ...context.attrs }} icon={VideoCameraTwotoneSvg} />
);

IconVideoCameraTwotone.displayName = 'IconVideoCameraTwotone';
IconVideoCameraTwotone.theme = 'twotone';
IconVideoCameraTwotone.originName = 'video-camera';

export default IconVideoCameraTwotone;
