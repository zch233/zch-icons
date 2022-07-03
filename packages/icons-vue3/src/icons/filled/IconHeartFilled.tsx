// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HeartFilledSvg from 'icons-base/es/asn/HeartFilled';

export interface HeartFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHeartFilled: HeartFilledIconType = (props, context) => <Icon name='HeartFilled' {...{ ...props, ...context.attrs }} icon={HeartFilledSvg} />;

IconHeartFilled.displayName = 'IconHeartFilled';
IconHeartFilled.theme = 'filled';
IconHeartFilled.originName = 'heart';

export default IconHeartFilled;
