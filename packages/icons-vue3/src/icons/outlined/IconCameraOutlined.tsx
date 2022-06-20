// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CameraOutlinedSvg from 'icon-base/es/asn/CameraOutlined';

export interface CameraOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCameraOutlined: CameraOutlinedIconType = (props, context) => (
    <Icon name='CameraOutlined' {...{ ...props, ...context.attrs }} icon={CameraOutlinedSvg} />
);

IconCameraOutlined.displayName = 'IconCameraOutlined';

export default IconCameraOutlined;
