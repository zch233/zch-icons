// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PauseCircleOutlinedSvg from 'icons-base/es/asn/PauseCircleOutlined';

export interface PauseCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPauseCircleOutlined: PauseCircleOutlinedIconType = (props, context) => (
    <Icon name='PauseCircleOutlined' {...{ ...props, ...context.attrs }} icon={PauseCircleOutlinedSvg} />
);

IconPauseCircleOutlined.displayName = 'IconPauseCircleOutlined';
IconPauseCircleOutlined.theme = 'outlined';
IconPauseCircleOutlined.originName = 'pause-circle';

export default IconPauseCircleOutlined;
