// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MessageTwoToneSvg from 'icon-base/es/asn/MessageTwoTone';

export interface MessageTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMessageTwoTone: MessageTwoToneIconType = (props, context) => (
    <Icon name='MessageTwoTone' {...{ ...props, ...context.attrs }} icon={MessageTwoToneSvg} />
);

IconMessageTwoTone.displayName = 'IconMessageTwoTone';

export default IconMessageTwoTone;
