// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MessageTwotoneSvg from 'icons-base/es/asn/MessageTwotone';

export interface MessageTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMessageTwotone: MessageTwotoneIconType = (props, context) => (
    <Icon name='MessageTwotone' {...{ ...props, ...context.attrs }} icon={MessageTwotoneSvg} />
);

IconMessageTwotone.displayName = 'IconMessageTwotone';
IconMessageTwotone.theme = 'twotone';
IconMessageTwotone.originName = 'message';

export default IconMessageTwotone;
