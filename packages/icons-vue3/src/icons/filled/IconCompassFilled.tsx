// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CompassFilledSvg from 'icon-base/es/asn/CompassFilled';

export interface CompassFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCompassFilled: CompassFilledIconType = (props, context) => <Icon name='CompassFilled' {...{ ...props, ...context.attrs }} icon={CompassFilledSvg} />;

IconCompassFilled.displayName = 'IconCompassFilled';

export default IconCompassFilled;
