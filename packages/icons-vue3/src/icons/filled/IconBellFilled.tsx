// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BellFilledSvg from 'gupo-icons-base/es/asn/BellFilled';

export interface BellFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBellFilled: BellFilledIconType = (props, context) => <Icon name='BellFilled' {...{ ...props, ...context.attrs }} icon={BellFilledSvg} />;

IconBellFilled.displayName = 'IconBellFilled';
IconBellFilled.theme = 'filled';
IconBellFilled.originName = 'bell';

export default IconBellFilled;
