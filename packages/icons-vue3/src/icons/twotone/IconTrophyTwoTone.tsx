// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TrophyTwotoneSvg from 'gupo-icons-base/es/asn/TrophyTwotone';

export interface TrophyTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTrophyTwotone: TrophyTwotoneIconType = (props, context) => <Icon name='TrophyTwotone' {...{ ...props, ...context.attrs }} icon={TrophyTwotoneSvg} />;

IconTrophyTwotone.displayName = 'IconTrophyTwotone';
IconTrophyTwotone.theme = 'twotone';
IconTrophyTwotone.originName = 'trophy';

export default IconTrophyTwotone;
