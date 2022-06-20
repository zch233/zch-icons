// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ChromeOutlinedSvg from 'icon-base/es/asn/ChromeOutlined';

export interface ChromeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconChromeOutlined: ChromeOutlinedIconType = (props, context) => (
    <Icon name='ChromeOutlined' {...{ ...props, ...context.attrs }} icon={ChromeOutlinedSvg} />
);

IconChromeOutlined.displayName = 'IconChromeOutlined';

export default IconChromeOutlined;
