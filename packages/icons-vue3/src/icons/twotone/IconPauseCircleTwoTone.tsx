// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PauseCircleTwotoneSvg from 'gupo-icons-base/es/asn/PauseCircleTwotone';

export interface PauseCircleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPauseCircleTwotone: PauseCircleTwotoneIconType = (props, context) => (
    <Icon name='PauseCircleTwotone' {...{ ...props, ...context.attrs }} icon={PauseCircleTwotoneSvg} />
);

IconPauseCircleTwotone.displayName = 'IconPauseCircleTwotone';
IconPauseCircleTwotone.theme = 'twotone';
IconPauseCircleTwotone.originName = 'pause-circle';

export default IconPauseCircleTwotone;
