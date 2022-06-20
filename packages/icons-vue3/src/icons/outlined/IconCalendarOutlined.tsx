// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CalendarOutlinedSvg from 'icon-base/es/asn/CalendarOutlined';

export interface CalendarOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCalendarOutlined: CalendarOutlinedIconType = (props, context) => (
    <Icon name='CalendarOutlined' {...{ ...props, ...context.attrs }} icon={CalendarOutlinedSvg} />
);

IconCalendarOutlined.displayName = 'IconCalendarOutlined';

export default IconCalendarOutlined;
