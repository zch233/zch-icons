// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RocketTwotoneSvg from 'icons-base/es/asn/RocketTwotone';

export interface RocketTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRocketTwotone: RocketTwotoneIconType = (props, context) => <Icon name='RocketTwotone' {...{ ...props, ...context.attrs }} icon={RocketTwotoneSvg} />;

IconRocketTwotone.displayName = 'IconRocketTwotone';
IconRocketTwotone.theme = 'twotone';
IconRocketTwotone.originName = 'rocket';

export default IconRocketTwotone;
