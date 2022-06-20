// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FullscreenExitOutlinedSvg from 'icon-base/es/asn/FullscreenExitOutlined';

export interface FullscreenExitOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFullscreenExitOutlined: FullscreenExitOutlinedIconType = (props, context) => (
    <Icon name='FullscreenExitOutlined' {...{ ...props, ...context.attrs }} icon={FullscreenExitOutlinedSvg} />
);

IconFullscreenExitOutlined.displayName = 'IconFullscreenExitOutlined';

export default IconFullscreenExitOutlined;
