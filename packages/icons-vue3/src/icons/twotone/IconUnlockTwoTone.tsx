// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import UnlockTwotoneSvg from 'icons-base/es/asn/UnlockTwotone';

export interface UnlockTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconUnlockTwotone: UnlockTwotoneIconType = (props, context) => <Icon name='UnlockTwotone' {...{ ...props, ...context.attrs }} icon={UnlockTwotoneSvg} />;

IconUnlockTwotone.displayName = 'IconUnlockTwotone';
IconUnlockTwotone.theme = 'twotone';
IconUnlockTwotone.originName = 'unlock';

export default IconUnlockTwotone;
