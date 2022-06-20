// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AppleOutlinedSvg from 'icon-base/es/asn/AppleOutlined';

export interface AppleOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAppleOutlined: AppleOutlinedIconType = (props, context) => <Icon name='AppleOutlined' {...{ ...props, ...context.attrs }} icon={AppleOutlinedSvg} />;

IconAppleOutlined.displayName = 'IconAppleOutlined';

export default IconAppleOutlined;
