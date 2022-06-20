// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import VideoCameraTwoToneSvg from 'icon-base/es/asn/VideoCameraTwoTone';

export interface VideoCameraTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconVideoCameraTwoTone: VideoCameraTwoToneIconType = (props, context) => (
    <Icon name='VideoCameraTwoTone' {...{ ...props, ...context.attrs }} icon={VideoCameraTwoToneSvg} />
);

IconVideoCameraTwoTone.displayName = 'IconVideoCameraTwoTone';

export default IconVideoCameraTwoTone;
