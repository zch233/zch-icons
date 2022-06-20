// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TrophyOutlinedSvg from 'icon-base/es/asn/TrophyOutlined';

export interface TrophyOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconTrophyOutlined: TrophyOutlinedIconType = (props, context) => (
    <Icon name='TrophyOutlined' {...{ ...props, ...context.attrs }} icon={TrophyOutlinedSvg} />
);

IconTrophyOutlined.displayName = 'IconTrophyOutlined';

export default IconTrophyOutlined;
