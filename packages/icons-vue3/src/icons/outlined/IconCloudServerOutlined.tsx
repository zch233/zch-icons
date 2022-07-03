// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloudServerOutlinedSvg from 'icons-base/es/asn/CloudServerOutlined';

export interface CloudServerOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconCloudServerOutlined: CloudServerOutlinedIconType = (props, context) => (
    <Icon name='CloudServerOutlined' {...{ ...props, ...context.attrs }} icon={CloudServerOutlinedSvg} />
);

IconCloudServerOutlined.displayName = 'IconCloudServerOutlined';
IconCloudServerOutlined.theme = 'outlined';
IconCloudServerOutlined.originName = 'cloud-server';

export default IconCloudServerOutlined;
