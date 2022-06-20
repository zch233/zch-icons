// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EyeInvisibleFilledSvg from 'icon-base/es/asn/EyeInvisibleFilled';

export interface EyeInvisibleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconEyeInvisibleFilled: EyeInvisibleFilledIconType = (props, context) => (
    <Icon name='EyeInvisibleFilled' {...{ ...props, ...context.attrs }} icon={EyeInvisibleFilledSvg} />
);

IconEyeInvisibleFilled.displayName = 'IconEyeInvisibleFilled';

export default IconEyeInvisibleFilled;
