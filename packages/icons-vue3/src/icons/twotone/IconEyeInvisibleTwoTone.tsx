// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EyeInvisibleTwotoneSvg from 'gupo-icons-base/es/asn/EyeInvisibleTwotone';

export interface EyeInvisibleTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEyeInvisibleTwotone: EyeInvisibleTwotoneIconType = (props, context) => (
    <Icon name='EyeInvisibleTwotone' {...{ ...props, ...context.attrs }} icon={EyeInvisibleTwotoneSvg} />
);

IconEyeInvisibleTwotone.displayName = 'IconEyeInvisibleTwotone';
IconEyeInvisibleTwotone.theme = 'twotone';
IconEyeInvisibleTwotone.originName = 'eye-invisible';

export default IconEyeInvisibleTwotone;
