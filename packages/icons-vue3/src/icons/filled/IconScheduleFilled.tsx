// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ScheduleFilledSvg from 'icons-base/es/asn/ScheduleFilled';

export interface ScheduleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconScheduleFilled: ScheduleFilledIconType = (props, context) => (
    <Icon name='ScheduleFilled' {...{ ...props, ...context.attrs }} icon={ScheduleFilledSvg} />
);

IconScheduleFilled.displayName = 'IconScheduleFilled';
IconScheduleFilled.theme = 'filled';
IconScheduleFilled.originName = 'schedule';

export default IconScheduleFilled;
