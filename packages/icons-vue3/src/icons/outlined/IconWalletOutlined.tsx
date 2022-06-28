// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WalletOutlinedSvg from 'gupo-icons-base/es/asn/WalletOutlined';

export interface WalletOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWalletOutlined: WalletOutlinedIconType = (props, context) => (
    <Icon name='WalletOutlined' {...{ ...props, ...context.attrs }} icon={WalletOutlinedSvg} />
);

IconWalletOutlined.displayName = 'IconWalletOutlined';
IconWalletOutlined.theme = 'outlined';
IconWalletOutlined.originName = 'wallet';

export default IconWalletOutlined;
