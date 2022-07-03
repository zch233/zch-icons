// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ScheduleOutlinedSvg from 'icons-base/es/asn/ScheduleOutlined';

export interface ScheduleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconScheduleOutlined: ScheduleOutlinedIconType = (props, context) => (
    <Icon name='ScheduleOutlined' {...{ ...props, ...context.attrs }} icon={ScheduleOutlinedSvg} />
);

IconScheduleOutlined.displayName = 'IconScheduleOutlined';
IconScheduleOutlined.theme = 'outlined';
IconScheduleOutlined.originName = 'schedule';

export default IconScheduleOutlined;
