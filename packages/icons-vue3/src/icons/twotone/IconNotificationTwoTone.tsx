// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import NotificationTwotoneSvg from 'gupo-icons-base/es/asn/NotificationTwotone';

export interface NotificationTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconNotificationTwotone: NotificationTwotoneIconType = (props, context) => (
    <Icon name='NotificationTwotone' {...{ ...props, ...context.attrs }} icon={NotificationTwotoneSvg} />
);

IconNotificationTwotone.displayName = 'IconNotificationTwotone';
IconNotificationTwotone.theme = 'twotone';
IconNotificationTwotone.originName = 'notification';

export default IconNotificationTwotone;
