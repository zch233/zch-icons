// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CameraOutlinedSvg from 'icons-base/es/asn/CameraOutlined';

export interface CameraOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCameraOutlined: CameraOutlinedIconType = (props, context) => (
    <Icon name='CameraOutlined' {...{ ...props, ...context.attrs }} icon={CameraOutlinedSvg} />
);

IconCameraOutlined.displayName = 'IconCameraOutlined';
IconCameraOutlined.theme = 'outlined';
IconCameraOutlined.originName = 'camera';

export default IconCameraOutlined;
