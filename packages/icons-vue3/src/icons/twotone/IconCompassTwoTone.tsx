// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CompassTwotoneSvg from 'icons-base/es/asn/CompassTwotone';

export interface CompassTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCompassTwotone: CompassTwotoneIconType = (props, context) => (
    <Icon name='CompassTwotone' {...{ ...props, ...context.attrs }} icon={CompassTwotoneSvg} />
);

IconCompassTwotone.displayName = 'IconCompassTwotone';
IconCompassTwotone.theme = 'twotone';
IconCompassTwotone.originName = 'compass';

export default IconCompassTwotone;
