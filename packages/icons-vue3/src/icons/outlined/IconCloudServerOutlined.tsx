// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import CloudServerOutlinedSvg from 'icon-base/es/asn/CloudServerOutlined';

export interface CloudServerOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconCloudServerOutlined: CloudServerOutlinedIconType = (props, context) => (
    <Icon name='CloudServerOutlined' {...{ ...props, ...context.attrs }} icon={CloudServerOutlinedSvg} />
);

IconCloudServerOutlined.displayName = 'IconCloudServerOutlined';

export default IconCloudServerOutlined;
