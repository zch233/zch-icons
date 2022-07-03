// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ZoomOutOutlinedSvg from 'icons-base/es/asn/ZoomOutOutlined';

export interface ZoomOutOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconZoomOutOutlined: ZoomOutOutlinedIconType = (props, context) => (
    <Icon name='ZoomOutOutlined' {...{ ...props, ...context.attrs }} icon={ZoomOutOutlinedSvg} />
);

IconZoomOutOutlined.displayName = 'IconZoomOutOutlined';
IconZoomOutOutlined.theme = 'outlined';
IconZoomOutOutlined.originName = 'zoom-out';

export default IconZoomOutOutlined;
