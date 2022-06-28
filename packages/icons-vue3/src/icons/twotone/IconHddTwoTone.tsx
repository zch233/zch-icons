// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HddTwotoneSvg from 'gupo-icons-base/es/asn/HddTwotone';

export interface HddTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHddTwotone: HddTwotoneIconType = (props, context) => <Icon name='HddTwotone' {...{ ...props, ...context.attrs }} icon={HddTwotoneSvg} />;

IconHddTwotone.displayName = 'IconHddTwotone';
IconHddTwotone.theme = 'twotone';
IconHddTwotone.originName = 'hdd';

export default IconHddTwotone;
