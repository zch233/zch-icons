// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import WalletFilledSvg from 'icons-base/es/asn/WalletFilled';

export interface WalletFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconWalletFilled: WalletFilledIconType = (props, context) => <Icon name='WalletFilled' {...{ ...props, ...context.attrs }} icon={WalletFilledSvg} />;

IconWalletFilled.displayName = 'IconWalletFilled';
IconWalletFilled.theme = 'filled';
IconWalletFilled.originName = 'wallet';

export default IconWalletFilled;
