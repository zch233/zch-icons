// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SkinFilledSvg from 'icon-base/es/asn/SkinFilled';

export interface SkinFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSkinFilled: SkinFilledIconType = (props, context) => <Icon name='SkinFilled' {...{ ...props, ...context.attrs }} icon={SkinFilledSvg} />;

IconSkinFilled.displayName = 'IconSkinFilled';

export default IconSkinFilled;
