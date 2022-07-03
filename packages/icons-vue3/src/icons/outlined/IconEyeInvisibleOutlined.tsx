// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EyeInvisibleOutlinedSvg from 'icons-base/es/asn/EyeInvisibleOutlined';

export interface EyeInvisibleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEyeInvisibleOutlined: EyeInvisibleOutlinedIconType = (props, context) => (
    <Icon name='EyeInvisibleOutlined' {...{ ...props, ...context.attrs }} icon={EyeInvisibleOutlinedSvg} />
);

IconEyeInvisibleOutlined.displayName = 'IconEyeInvisibleOutlined';
IconEyeInvisibleOutlined.theme = 'outlined';
IconEyeInvisibleOutlined.originName = 'eye-invisible';

export default IconEyeInvisibleOutlined;
