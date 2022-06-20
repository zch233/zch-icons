// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MonitorOutlinedSvg from 'icon-base/es/asn/MonitorOutlined';

export interface MonitorOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMonitorOutlined: MonitorOutlinedIconType = (props, context) => (
    <Icon name='MonitorOutlined' {...{ ...props, ...context.attrs }} icon={MonitorOutlinedSvg} />
);

IconMonitorOutlined.displayName = 'IconMonitorOutlined';

export default IconMonitorOutlined;
