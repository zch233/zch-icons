// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import NotificationFilledSvg from 'icon-base/es/asn/NotificationFilled';

export interface NotificationFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconNotificationFilled: NotificationFilledIconType = (props, context) => (
    <Icon name='NotificationFilled' {...{ ...props, ...context.attrs }} icon={NotificationFilledSvg} />
);

IconNotificationFilled.displayName = 'IconNotificationFilled';

export default IconNotificationFilled;
