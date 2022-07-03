// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PushpinTwotoneSvg from 'icons-base/es/asn/PushpinTwotone';

export interface PushpinTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPushpinTwotone: PushpinTwotoneIconType = (props, context) => (
    <Icon name='PushpinTwotone' {...{ ...props, ...context.attrs }} icon={PushpinTwotoneSvg} />
);

IconPushpinTwotone.displayName = 'IconPushpinTwotone';
IconPushpinTwotone.theme = 'twotone';
IconPushpinTwotone.originName = 'pushpin';

export default IconPushpinTwotone;
