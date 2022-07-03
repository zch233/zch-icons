// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SkinOutlinedSvg from 'icons-base/es/asn/SkinOutlined';

export interface SkinOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSkinOutlined: SkinOutlinedIconType = (props, context) => <Icon name='SkinOutlined' {...{ ...props, ...context.attrs }} icon={SkinOutlinedSvg} />;

IconSkinOutlined.displayName = 'IconSkinOutlined';
IconSkinOutlined.theme = 'outlined';
IconSkinOutlined.originName = 'skin';

export default IconSkinOutlined;
