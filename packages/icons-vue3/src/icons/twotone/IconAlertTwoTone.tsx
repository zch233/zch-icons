// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlertTwotoneSvg from 'icons-base/es/asn/AlertTwotone';

export interface AlertTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAlertTwotone: AlertTwotoneIconType = (props, context) => <Icon name='AlertTwotone' {...{ ...props, ...context.attrs }} icon={AlertTwotoneSvg} />;

IconAlertTwotone.displayName = 'IconAlertTwotone';
IconAlertTwotone.theme = 'twotone';
IconAlertTwotone.originName = 'alert';

export default IconAlertTwotone;
