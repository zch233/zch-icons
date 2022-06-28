// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import FallOutlinedSvg from 'gupo-icons-base/es/asn/FallOutlined';

export interface FallOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconFallOutlined: FallOutlinedIconType = (props, context) => <Icon name='FallOutlined' {...{ ...props, ...context.attrs }} icon={FallOutlinedSvg} />;

IconFallOutlined.displayName = 'IconFallOutlined';
IconFallOutlined.theme = 'outlined';
IconFallOutlined.originName = 'fall';

export default IconFallOutlined;
