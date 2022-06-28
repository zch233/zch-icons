// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HeartTwotoneSvg from 'gupo-icons-base/es/asn/HeartTwotone';

export interface HeartTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHeartTwotone: HeartTwotoneIconType = (props, context) => <Icon name='HeartTwotone' {...{ ...props, ...context.attrs }} icon={HeartTwotoneSvg} />;

IconHeartTwotone.displayName = 'IconHeartTwotone';
IconHeartTwotone.theme = 'twotone';
IconHeartTwotone.originName = 'heart';

export default IconHeartTwotone;
