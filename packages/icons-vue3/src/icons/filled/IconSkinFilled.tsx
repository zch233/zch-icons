// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SkinFilledSvg from 'icons-base/es/asn/SkinFilled';

export interface SkinFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSkinFilled: SkinFilledIconType = (props, context) => <Icon name='SkinFilled' {...{ ...props, ...context.attrs }} icon={SkinFilledSvg} />;

IconSkinFilled.displayName = 'IconSkinFilled';
IconSkinFilled.theme = 'filled';
IconSkinFilled.originName = 'skin';

export default IconSkinFilled;
