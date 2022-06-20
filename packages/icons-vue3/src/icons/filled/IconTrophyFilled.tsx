// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TrophyFilledSvg from 'icon-base/es/asn/TrophyFilled';

export interface TrophyFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTrophyFilled: TrophyFilledIconType = (props, context) => <Icon name='TrophyFilled' {...{ ...props, ...context.attrs }} icon={TrophyFilledSvg} />;

IconTrophyFilled.displayName = 'IconTrophyFilled';

export default IconTrophyFilled;
