// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FullscreenOutlinedSvg from 'gupo-icons-base/es/asn/FullscreenOutlined';

export interface FullscreenOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFullscreenOutlined: FullscreenOutlinedIconType = (props, context) => (
    <Icon name='FullscreenOutlined' {...{ ...props, ...context.attrs }} icon={FullscreenOutlinedSvg} />
);

IconFullscreenOutlined.displayName = 'IconFullscreenOutlined';
IconFullscreenOutlined.theme = 'outlined';
IconFullscreenOutlined.originName = 'fullscreen';

export default IconFullscreenOutlined;
