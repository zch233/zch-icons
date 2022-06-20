// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EyeOutlinedSvg from 'icon-base/es/asn/EyeOutlined';

export interface EyeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconEyeOutlined: EyeOutlinedIconType = (props, context) => <Icon name='EyeOutlined' {...{ ...props, ...context.attrs }} icon={EyeOutlinedSvg} />;

IconEyeOutlined.displayName = 'IconEyeOutlined';

export default IconEyeOutlined;
