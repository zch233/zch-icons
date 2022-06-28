// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CalendarOutlinedSvg from 'gupo-icons-base/es/asn/CalendarOutlined';

export interface CalendarOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCalendarOutlined: CalendarOutlinedIconType = (props, context) => (
    <Icon name='CalendarOutlined' {...{ ...props, ...context.attrs }} icon={CalendarOutlinedSvg} />
);

IconCalendarOutlined.displayName = 'IconCalendarOutlined';
IconCalendarOutlined.theme = 'outlined';
IconCalendarOutlined.originName = 'calendar';

export default IconCalendarOutlined;
