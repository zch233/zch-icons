// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DashboardFilledSvg from 'icons-base/es/asn/DashboardFilled';

export interface DashboardFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDashboardFilled: DashboardFilledIconType = (props, context) => (
    <Icon name='DashboardFilled' {...{ ...props, ...context.attrs }} icon={DashboardFilledSvg} />
);

IconDashboardFilled.displayName = 'IconDashboardFilled';
IconDashboardFilled.theme = 'filled';
IconDashboardFilled.originName = 'dashboard';

export default IconDashboardFilled;
