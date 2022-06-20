// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TrophyTwoToneSvg from 'icon-base/es/asn/TrophyTwoTone';

export interface TrophyTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTrophyTwoTone: TrophyTwoToneIconType = (props, context) => <Icon name='TrophyTwoTone' {...{ ...props, ...context.attrs }} icon={TrophyTwoToneSvg} />;

IconTrophyTwoTone.displayName = 'IconTrophyTwoTone';

export default IconTrophyTwoTone;
