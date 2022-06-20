// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PushpinTwoToneSvg from 'icon-base/es/asn/PushpinTwoTone';

export interface PushpinTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPushpinTwoTone: PushpinTwoToneIconType = (props, context) => (
    <Icon name='PushpinTwoTone' {...{ ...props, ...context.attrs }} icon={PushpinTwoToneSvg} />
);

IconPushpinTwoTone.displayName = 'IconPushpinTwoTone';

export default IconPushpinTwoTone;
