// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SkinTwotoneSvg from 'icons-base/es/asn/SkinTwotone';

export interface SkinTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSkinTwotone: SkinTwotoneIconType = (props, context) => <Icon name='SkinTwotone' {...{ ...props, ...context.attrs }} icon={SkinTwotoneSvg} />;

IconSkinTwotone.displayName = 'IconSkinTwotone';
IconSkinTwotone.theme = 'twotone';
IconSkinTwotone.originName = 'skin';

export default IconSkinTwotone;
