// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CalendarFilledSvg from 'icons-base/es/asn/CalendarFilled';

export interface CalendarFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCalendarFilled: CalendarFilledIconType = (props, context) => (
    <Icon name='CalendarFilled' {...{ ...props, ...context.attrs }} icon={CalendarFilledSvg} />
);

IconCalendarFilled.displayName = 'IconCalendarFilled';
IconCalendarFilled.theme = 'filled';
IconCalendarFilled.originName = 'calendar';

export default IconCalendarFilled;
