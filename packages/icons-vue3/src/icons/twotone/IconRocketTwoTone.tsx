// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RocketTwoToneSvg from 'icon-base/es/asn/RocketTwoTone';

export interface RocketTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRocketTwoTone: RocketTwoToneIconType = (props, context) => <Icon name='RocketTwoTone' {...{ ...props, ...context.attrs }} icon={RocketTwoToneSvg} />;

IconRocketTwoTone.displayName = 'IconRocketTwoTone';

export default IconRocketTwoTone;
