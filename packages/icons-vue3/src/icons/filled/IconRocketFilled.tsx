// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RocketFilledSvg from 'icon-base/es/asn/RocketFilled';

export interface RocketFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRocketFilled: RocketFilledIconType = (props, context) => <Icon name='RocketFilled' {...{ ...props, ...context.attrs }} icon={RocketFilledSvg} />;

IconRocketFilled.displayName = 'IconRocketFilled';

export default IconRocketFilled;
