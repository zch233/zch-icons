// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FullscreenExitOutlinedSvg from 'gupo-icons-base/es/asn/FullscreenExitOutlined';

export interface FullscreenExitOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFullscreenExitOutlined: FullscreenExitOutlinedIconType = (props, context) => (
    <Icon name='FullscreenExitOutlined' {...{ ...props, ...context.attrs }} icon={FullscreenExitOutlinedSvg} />
);

IconFullscreenExitOutlined.displayName = 'IconFullscreenExitOutlined';
IconFullscreenExitOutlined.theme = 'outlined';
IconFullscreenExitOutlined.originName = 'fullscreen-exit';

export default IconFullscreenExitOutlined;
