// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AppleOutlinedSvg from 'gupo-icons-base/es/asn/AppleOutlined';

export interface AppleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAppleOutlined: AppleOutlinedIconType = (props, context) => <Icon name='AppleOutlined' {...{ ...props, ...context.attrs }} icon={AppleOutlinedSvg} />;

IconAppleOutlined.displayName = 'IconAppleOutlined';
IconAppleOutlined.theme = 'outlined';
IconAppleOutlined.originName = 'apple';

export default IconAppleOutlined;
