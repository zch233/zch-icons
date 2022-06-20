// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HeartFilledSvg from 'icon-base/es/asn/HeartFilled';

export interface HeartFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconHeartFilled: HeartFilledIconType = (props, context) => <Icon name='HeartFilled' {...{ ...props, ...context.attrs }} icon={HeartFilledSvg} />;

IconHeartFilled.displayName = 'IconHeartFilled';

export default IconHeartFilled;
