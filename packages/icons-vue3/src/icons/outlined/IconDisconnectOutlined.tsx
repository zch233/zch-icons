// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DisconnectOutlinedSvg from 'icons-base/es/asn/DisconnectOutlined';

export interface DisconnectOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDisconnectOutlined: DisconnectOutlinedIconType = (props, context) => (
    <Icon name='DisconnectOutlined' {...{ ...props, ...context.attrs }} icon={DisconnectOutlinedSvg} />
);

IconDisconnectOutlined.displayName = 'IconDisconnectOutlined';
IconDisconnectOutlined.theme = 'outlined';
IconDisconnectOutlined.originName = 'disconnect';

export default IconDisconnectOutlined;
