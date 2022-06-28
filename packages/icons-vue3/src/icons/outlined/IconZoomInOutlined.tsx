// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ZoomInOutlinedSvg from 'gupo-icons-base/es/asn/ZoomInOutlined';

export interface ZoomInOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconZoomInOutlined: ZoomInOutlinedIconType = (props, context) => (
    <Icon name='ZoomInOutlined' {...{ ...props, ...context.attrs }} icon={ZoomInOutlinedSvg} />
);

IconZoomInOutlined.displayName = 'IconZoomInOutlined';
IconZoomInOutlined.theme = 'outlined';
IconZoomInOutlined.originName = 'zoom-in';

export default IconZoomInOutlined;
