// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CalendarTwoToneSvg from 'icon-base/es/asn/CalendarTwoTone';

export interface CalendarTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCalendarTwoTone: CalendarTwoToneIconType = (props, context) => (
    <Icon name='CalendarTwoTone' {...{ ...props, ...context.attrs }} icon={CalendarTwoToneSvg} />
);

IconCalendarTwoTone.displayName = 'IconCalendarTwoTone';

export default IconCalendarTwoTone;
