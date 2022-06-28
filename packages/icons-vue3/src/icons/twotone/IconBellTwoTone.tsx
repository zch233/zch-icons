// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BellTwotoneSvg from 'gupo-icons-base/es/asn/BellTwotone';

export interface BellTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBellTwotone: BellTwotoneIconType = (props, context) => <Icon name='BellTwotone' {...{ ...props, ...context.attrs }} icon={BellTwotoneSvg} />;

IconBellTwotone.displayName = 'IconBellTwotone';
IconBellTwotone.theme = 'twotone';
IconBellTwotone.originName = 'bell';

export default IconBellTwotone;
