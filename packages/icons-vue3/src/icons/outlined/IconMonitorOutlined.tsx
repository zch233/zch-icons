// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MonitorOutlinedSvg from 'icons-base/es/asn/MonitorOutlined';

export interface MonitorOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMonitorOutlined: MonitorOutlinedIconType = (props, context) => (
    <Icon name='MonitorOutlined' {...{ ...props, ...context.attrs }} icon={MonitorOutlinedSvg} />
);

IconMonitorOutlined.displayName = 'IconMonitorOutlined';
IconMonitorOutlined.theme = 'outlined';
IconMonitorOutlined.originName = 'monitor';

export default IconMonitorOutlined;
