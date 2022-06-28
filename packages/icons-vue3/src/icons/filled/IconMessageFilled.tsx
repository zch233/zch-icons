// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MessageFilledSvg from 'gupo-icons-base/es/asn/MessageFilled';

export interface MessageFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMessageFilled: MessageFilledIconType = (props, context) => <Icon name='MessageFilled' {...{ ...props, ...context.attrs }} icon={MessageFilledSvg} />;

IconMessageFilled.displayName = 'IconMessageFilled';
IconMessageFilled.theme = 'filled';
IconMessageFilled.originName = 'message';

export default IconMessageFilled;
