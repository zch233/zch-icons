// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MehTwotoneSvg from 'gupo-icons-base/es/asn/MehTwotone';

export interface MehTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMehTwotone: MehTwotoneIconType = (props, context) => <Icon name='MehTwotone' {...{ ...props, ...context.attrs }} icon={MehTwotoneSvg} />;

IconMehTwotone.displayName = 'IconMehTwotone';
IconMehTwotone.theme = 'twotone';
IconMehTwotone.originName = 'meh';

export default IconMehTwotone;
