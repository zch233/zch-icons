// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WalletOutlinedSvg from 'icon-base/es/asn/WalletOutlined';

export interface WalletOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconWalletOutlined: WalletOutlinedIconType = (props, context) => (
    <Icon name='WalletOutlined' {...{ ...props, ...context.attrs }} icon={WalletOutlinedSvg} />
);

IconWalletOutlined.displayName = 'IconWalletOutlined';

export default IconWalletOutlined;
