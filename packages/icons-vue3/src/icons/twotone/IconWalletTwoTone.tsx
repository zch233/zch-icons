// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WalletTwotoneSvg from 'gupo-icons-base/es/asn/WalletTwotone';

export interface WalletTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWalletTwotone: WalletTwotoneIconType = (props, context) => <Icon name='WalletTwotone' {...{ ...props, ...context.attrs }} icon={WalletTwotoneSvg} />;

IconWalletTwotone.displayName = 'IconWalletTwotone';
IconWalletTwotone.theme = 'twotone';
IconWalletTwotone.originName = 'wallet';

export default IconWalletTwotone;
