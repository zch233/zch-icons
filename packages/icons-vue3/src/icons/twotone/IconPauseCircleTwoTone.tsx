// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PauseCircleTwoToneSvg from 'icon-base/es/asn/PauseCircleTwoTone';

export interface PauseCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPauseCircleTwoTone: PauseCircleTwoToneIconType = (props, context) => (
    <Icon name='PauseCircleTwoTone' {...{ ...props, ...context.attrs }} icon={PauseCircleTwoToneSvg} />
);

IconPauseCircleTwoTone.displayName = 'IconPauseCircleTwoTone';

export default IconPauseCircleTwoTone;
