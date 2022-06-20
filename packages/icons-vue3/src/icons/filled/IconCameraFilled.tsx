// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CameraFilledSvg from 'icon-base/es/asn/CameraFilled';

export interface CameraFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCameraFilled: CameraFilledIconType = (props, context) => <Icon name='CameraFilled' {...{ ...props, ...context.attrs }} icon={CameraFilledSvg} />;

IconCameraFilled.displayName = 'IconCameraFilled';

export default IconCameraFilled;
