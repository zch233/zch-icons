// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StopFilledSvg from 'gupo-icons-base/es/asn/StopFilled';

export interface StopFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconStopFilled: StopFilledIconType = (props, context) => <Icon name='StopFilled' {...{ ...props, ...context.attrs }} icon={StopFilledSvg} />;

IconStopFilled.displayName = 'IconStopFilled';
IconStopFilled.theme = 'filled';
IconStopFilled.originName = 'stop';

export default IconStopFilled;
