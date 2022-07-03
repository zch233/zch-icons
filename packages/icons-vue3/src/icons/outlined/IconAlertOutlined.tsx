// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AlertOutlinedSvg from 'icons-base/es/asn/AlertOutlined';

export interface AlertOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAlertOutlined: AlertOutlinedIconType = (props, context) => <Icon name='AlertOutlined' {...{ ...props, ...context.attrs }} icon={AlertOutlinedSvg} />;

IconAlertOutlined.displayName = 'IconAlertOutlined';
IconAlertOutlined.theme = 'outlined';
IconAlertOutlined.originName = 'alert';

export default IconAlertOutlined;
