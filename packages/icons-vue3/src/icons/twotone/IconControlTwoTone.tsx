// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ControlTwoToneSvg from 'icon-base/es/asn/ControlTwoTone';

export interface ControlTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconControlTwoTone: ControlTwoToneIconType = (props, context) => (
    <Icon name='ControlTwoTone' {...{ ...props, ...context.attrs }} icon={ControlTwoToneSvg} />
);

IconControlTwoTone.displayName = 'IconControlTwoTone';

export default IconControlTwoTone;
