// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InboxOutlinedSvg from 'icons-base/es/asn/InboxOutlined';

export interface InboxOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconInboxOutlined: InboxOutlinedIconType = (props, context) => <Icon name='InboxOutlined' {...{ ...props, ...context.attrs }} icon={InboxOutlinedSvg} />;

IconInboxOutlined.displayName = 'IconInboxOutlined';
IconInboxOutlined.theme = 'outlined';
IconInboxOutlined.originName = 'inbox';

export default IconInboxOutlined;
