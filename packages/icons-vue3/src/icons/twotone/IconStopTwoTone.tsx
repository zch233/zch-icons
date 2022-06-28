// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import StopTwotoneSvg from 'gupo-icons-base/es/asn/StopTwotone';

export interface StopTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconStopTwotone: StopTwotoneIconType = (props, context) => <Icon name='StopTwotone' {...{ ...props, ...context.attrs }} icon={StopTwotoneSvg} />;

IconStopTwotone.displayName = 'IconStopTwotone';
IconStopTwotone.theme = 'twotone';
IconStopTwotone.originName = 'stop';

export default IconStopTwotone;
