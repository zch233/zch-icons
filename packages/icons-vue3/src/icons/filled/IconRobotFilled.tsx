// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RobotFilledSvg from 'icon-base/es/asn/RobotFilled';

export interface RobotFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRobotFilled: RobotFilledIconType = (props, context) => <Icon name='RobotFilled' {...{ ...props, ...context.attrs }} icon={RobotFilledSvg} />;

IconRobotFilled.displayName = 'IconRobotFilled';

export default IconRobotFilled;
