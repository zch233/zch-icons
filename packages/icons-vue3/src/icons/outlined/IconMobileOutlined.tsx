// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MobileOutlinedSvg from 'icons-base/es/asn/MobileOutlined';

export interface MobileOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMobileOutlined: MobileOutlinedIconType = (props, context) => (
    <Icon name='MobileOutlined' {...{ ...props, ...context.attrs }} icon={MobileOutlinedSvg} />
);

IconMobileOutlined.displayName = 'IconMobileOutlined';
IconMobileOutlined.theme = 'outlined';
IconMobileOutlined.originName = 'mobile';

export default IconMobileOutlined;
