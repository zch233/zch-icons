// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MessageFilledSvg from 'icon-base/es/asn/MessageFilled';

export interface MessageFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMessageFilled: MessageFilledIconType = (props, context) => <Icon name='MessageFilled' {...{ ...props, ...context.attrs }} icon={MessageFilledSvg} />;

IconMessageFilled.displayName = 'IconMessageFilled';

export default IconMessageFilled;
