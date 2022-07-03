// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GatewayOutlinedSvg from 'icons-base/es/asn/GatewayOutlined';

export interface GatewayOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGatewayOutlined: GatewayOutlinedIconType = (props, context) => (
    <Icon name='GatewayOutlined' {...{ ...props, ...context.attrs }} icon={GatewayOutlinedSvg} />
);

IconGatewayOutlined.displayName = 'IconGatewayOutlined';
IconGatewayOutlined.theme = 'outlined';
IconGatewayOutlined.originName = 'gateway';

export default IconGatewayOutlined;
