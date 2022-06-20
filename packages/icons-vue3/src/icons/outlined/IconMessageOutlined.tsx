// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MessageOutlinedSvg from 'icon-base/es/asn/MessageOutlined';

export interface MessageOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMessageOutlined: MessageOutlinedIconType = (props, context) => (
    <Icon name='MessageOutlined' {...{ ...props, ...context.attrs }} icon={MessageOutlinedSvg} />
);

IconMessageOutlined.displayName = 'IconMessageOutlined';

export default IconMessageOutlined;
