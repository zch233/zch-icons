// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EyeInvisibleTwoToneSvg from 'icon-base/es/asn/EyeInvisibleTwoTone';

export interface EyeInvisibleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconEyeInvisibleTwoTone: EyeInvisibleTwoToneIconType = (props, context) => (
    <Icon name='EyeInvisibleTwoTone' {...{ ...props, ...context.attrs }} icon={EyeInvisibleTwoToneSvg} />
);

IconEyeInvisibleTwoTone.displayName = 'IconEyeInvisibleTwoTone';

export default IconEyeInvisibleTwoTone;
