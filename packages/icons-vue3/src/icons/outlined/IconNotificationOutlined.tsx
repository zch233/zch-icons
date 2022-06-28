// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import NotificationOutlinedSvg from 'gupo-icons-base/es/asn/NotificationOutlined';

export interface NotificationOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconNotificationOutlined: NotificationOutlinedIconType = (props, context) => (
    <Icon name='NotificationOutlined' {...{ ...props, ...context.attrs }} icon={NotificationOutlinedSvg} />
);

IconNotificationOutlined.displayName = 'IconNotificationOutlined';
IconNotificationOutlined.theme = 'outlined';
IconNotificationOutlined.originName = 'notification';

export default IconNotificationOutlined;
