// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import NotificationOutlinedSvg from 'icon-base/es/asn/NotificationOutlined';

export interface NotificationOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconNotificationOutlined: NotificationOutlinedIconType = (props, context) => (
    <Icon name='NotificationOutlined' {...{ ...props, ...context.attrs }} icon={NotificationOutlinedSvg} />
);

IconNotificationOutlined.displayName = 'IconNotificationOutlined';

export default IconNotificationOutlined;
