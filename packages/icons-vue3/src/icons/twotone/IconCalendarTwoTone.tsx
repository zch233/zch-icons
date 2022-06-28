// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CalendarTwotoneSvg from 'gupo-icons-base/es/asn/CalendarTwotone';

export interface CalendarTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCalendarTwotone: CalendarTwotoneIconType = (props, context) => (
    <Icon name='CalendarTwotone' {...{ ...props, ...context.attrs }} icon={CalendarTwotoneSvg} />
);

IconCalendarTwotone.displayName = 'IconCalendarTwotone';
IconCalendarTwotone.theme = 'twotone';
IconCalendarTwotone.originName = 'calendar';

export default IconCalendarTwotone;
