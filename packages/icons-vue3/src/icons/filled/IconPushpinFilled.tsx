// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PushpinFilledSvg from 'gupo-icons-base/es/asn/PushpinFilled';

export interface PushpinFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPushpinFilled: PushpinFilledIconType = (props, context) => <Icon name='PushpinFilled' {...{ ...props, ...context.attrs }} icon={PushpinFilledSvg} />;

IconPushpinFilled.displayName = 'IconPushpinFilled';
IconPushpinFilled.theme = 'filled';
IconPushpinFilled.originName = 'pushpin';

export default IconPushpinFilled;
