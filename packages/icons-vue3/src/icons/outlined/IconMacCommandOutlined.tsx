// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MacCommandOutlinedSvg from 'gupo-icons-base/es/asn/MacCommandOutlined';

export interface MacCommandOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMacCommandOutlined: MacCommandOutlinedIconType = (props, context) => (
    <Icon name='MacCommandOutlined' {...{ ...props, ...context.attrs }} icon={MacCommandOutlinedSvg} />
);

IconMacCommandOutlined.displayName = 'IconMacCommandOutlined';
IconMacCommandOutlined.theme = 'outlined';
IconMacCommandOutlined.originName = 'mac-command';

export default IconMacCommandOutlined;
