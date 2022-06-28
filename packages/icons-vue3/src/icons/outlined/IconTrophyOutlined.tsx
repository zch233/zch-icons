// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import TrophyOutlinedSvg from 'gupo-icons-base/es/asn/TrophyOutlined';

export interface TrophyOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconTrophyOutlined: TrophyOutlinedIconType = (props, context) => (
    <Icon name='TrophyOutlined' {...{ ...props, ...context.attrs }} icon={TrophyOutlinedSvg} />
);

IconTrophyOutlined.displayName = 'IconTrophyOutlined';
IconTrophyOutlined.theme = 'outlined';
IconTrophyOutlined.originName = 'trophy';

export default IconTrophyOutlined;
