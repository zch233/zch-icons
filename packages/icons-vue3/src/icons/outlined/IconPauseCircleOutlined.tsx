// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PauseCircleOutlinedSvg from 'icon-base/es/asn/PauseCircleOutlined';

export interface PauseCircleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPauseCircleOutlined: PauseCircleOutlinedIconType = (props, context) => (
    <Icon name='PauseCircleOutlined' {...{ ...props, ...context.attrs }} icon={PauseCircleOutlinedSvg} />
);

IconPauseCircleOutlined.displayName = 'IconPauseCircleOutlined';

export default IconPauseCircleOutlined;
