// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlertFilledSvg from 'icon-base/es/asn/AlertFilled';

export interface AlertFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAlertFilled: AlertFilledIconType = (props, context) => <Icon name='AlertFilled' {...{ ...props, ...context.attrs }} icon={AlertFilledSvg} />;

IconAlertFilled.displayName = 'IconAlertFilled';

export default IconAlertFilled;
