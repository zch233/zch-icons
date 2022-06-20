// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CalendarFilledSvg from 'icon-base/es/asn/CalendarFilled';

export interface CalendarFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCalendarFilled: CalendarFilledIconType = (props, context) => (
    <Icon name='CalendarFilled' {...{ ...props, ...context.attrs }} icon={CalendarFilledSvg} />
);

IconCalendarFilled.displayName = 'IconCalendarFilled';

export default IconCalendarFilled;
