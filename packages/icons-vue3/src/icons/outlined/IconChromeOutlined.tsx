// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ChromeOutlinedSvg from 'gupo-icons-base/es/asn/ChromeOutlined';

export interface ChromeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconChromeOutlined: ChromeOutlinedIconType = (props, context) => (
    <Icon name='ChromeOutlined' {...{ ...props, ...context.attrs }} icon={ChromeOutlinedSvg} />
);

IconChromeOutlined.displayName = 'IconChromeOutlined';
IconChromeOutlined.theme = 'outlined';
IconChromeOutlined.originName = 'chrome';

export default IconChromeOutlined;
