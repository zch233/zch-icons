// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DashboardOutlinedSvg from 'icon-base/es/asn/DashboardOutlined';

export interface DashboardOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDashboardOutlined: DashboardOutlinedIconType = (props, context) => (
    <Icon name='DashboardOutlined' {...{ ...props, ...context.attrs }} icon={DashboardOutlinedSvg} />
);

IconDashboardOutlined.displayName = 'IconDashboardOutlined';

export default IconDashboardOutlined;
