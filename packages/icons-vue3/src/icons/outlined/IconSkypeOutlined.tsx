// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SkypeOutlinedSvg from 'icons-base/es/asn/SkypeOutlined';

export interface SkypeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconSkypeOutlined: SkypeOutlinedIconType = (props, context) => <Icon name='SkypeOutlined' {...{ ...props, ...context.attrs }} icon={SkypeOutlinedSvg} />;

IconSkypeOutlined.displayName = 'IconSkypeOutlined';
IconSkypeOutlined.theme = 'outlined';
IconSkypeOutlined.originName = 'skype';

export default IconSkypeOutlined;
