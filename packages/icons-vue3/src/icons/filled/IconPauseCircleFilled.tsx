// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PauseCircleFilledSvg from 'icon-base/es/asn/PauseCircleFilled';

export interface PauseCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPauseCircleFilled: PauseCircleFilledIconType = (props, context) => (
    <Icon name='PauseCircleFilled' {...{ ...props, ...context.attrs }} icon={PauseCircleFilledSvg} />
);

IconPauseCircleFilled.displayName = 'IconPauseCircleFilled';

export default IconPauseCircleFilled;
