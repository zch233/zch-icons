// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RobotOutlinedSvg from 'icon-base/es/asn/RobotOutlined';

export interface RobotOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRobotOutlined: RobotOutlinedIconType = (props, context) => <Icon name='RobotOutlined' {...{ ...props, ...context.attrs }} icon={RobotOutlinedSvg} />;

IconRobotOutlined.displayName = 'IconRobotOutlined';

export default IconRobotOutlined;
