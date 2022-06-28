// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CrownTwotoneSvg from 'gupo-icons-base/es/asn/CrownTwotone';

export interface CrownTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCrownTwotone: CrownTwotoneIconType = (props, context) => <Icon name='CrownTwotone' {...{ ...props, ...context.attrs }} icon={CrownTwotoneSvg} />;

IconCrownTwotone.displayName = 'IconCrownTwotone';
IconCrownTwotone.theme = 'twotone';
IconCrownTwotone.originName = 'crown';

export default IconCrownTwotone;
