// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FrownTwotoneSvg from 'gupo-icons-base/es/asn/FrownTwotone';

export interface FrownTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFrownTwotone: FrownTwotoneIconType = (props, context) => <Icon name='FrownTwotone' {...{ ...props, ...context.attrs }} icon={FrownTwotoneSvg} />;

IconFrownTwotone.displayName = 'IconFrownTwotone';
IconFrownTwotone.theme = 'twotone';
IconFrownTwotone.originName = 'frown';

export default IconFrownTwotone;
