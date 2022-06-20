// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FrownFilledSvg from 'icon-base/es/asn/FrownFilled';

export interface FrownFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconFrownFilled: FrownFilledIconType = (props, context) => <Icon name='FrownFilled' {...{ ...props, ...context.attrs }} icon={FrownFilledSvg} />;

IconFrownFilled.displayName = 'IconFrownFilled';

export default IconFrownFilled;
