// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CrownFilledSvg from 'gupo-icons-base/es/asn/CrownFilled';

export interface CrownFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCrownFilled: CrownFilledIconType = (props, context) => <Icon name='CrownFilled' {...{ ...props, ...context.attrs }} icon={CrownFilledSvg} />;

IconCrownFilled.displayName = 'IconCrownFilled';
IconCrownFilled.theme = 'filled';
IconCrownFilled.originName = 'crown';

export default IconCrownFilled;
