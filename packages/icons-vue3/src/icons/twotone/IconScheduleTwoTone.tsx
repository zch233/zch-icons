// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ScheduleTwoToneSvg from 'icon-base/es/asn/ScheduleTwoTone';

export interface ScheduleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconScheduleTwoTone: ScheduleTwoToneIconType = (props, context) => (
    <Icon name='ScheduleTwoTone' {...{ ...props, ...context.attrs }} icon={ScheduleTwoToneSvg} />
);

IconScheduleTwoTone.displayName = 'IconScheduleTwoTone';

export default IconScheduleTwoTone;
