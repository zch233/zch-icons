// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EyeInvisibleFilledSvg from 'icons-base/es/asn/EyeInvisibleFilled';

export interface EyeInvisibleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEyeInvisibleFilled: EyeInvisibleFilledIconType = (props, context) => (
    <Icon name='EyeInvisibleFilled' {...{ ...props, ...context.attrs }} icon={EyeInvisibleFilledSvg} />
);

IconEyeInvisibleFilled.displayName = 'IconEyeInvisibleFilled';
IconEyeInvisibleFilled.theme = 'filled';
IconEyeInvisibleFilled.originName = 'eye-invisible';

export default IconEyeInvisibleFilled;
