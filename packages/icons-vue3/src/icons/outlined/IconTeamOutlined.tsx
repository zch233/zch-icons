// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TeamOutlinedSvg from 'icon-base/es/asn/TeamOutlined';

export interface TeamOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTeamOutlined: TeamOutlinedIconType = (props, context) => <Icon name='TeamOutlined' {...{ ...props, ...context.attrs }} icon={TeamOutlinedSvg} />;

IconTeamOutlined.displayName = 'IconTeamOutlined';

export default IconTeamOutlined;
