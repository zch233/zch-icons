// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DashboardTwotoneSvg from 'gupo-icons-base/es/asn/DashboardTwotone';

export interface DashboardTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDashboardTwotone: DashboardTwotoneIconType = (props, context) => (
    <Icon name='DashboardTwotone' {...{ ...props, ...context.attrs }} icon={DashboardTwotoneSvg} />
);

IconDashboardTwotone.displayName = 'IconDashboardTwotone';
IconDashboardTwotone.theme = 'twotone';
IconDashboardTwotone.originName = 'dashboard';

export default IconDashboardTwotone;
