// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LinkedinOutlinedSvg from 'gupo-icons-base/es/asn/LinkedinOutlined';

export interface LinkedinOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconLinkedinOutlined: LinkedinOutlinedIconType = (props, context) => (
    <Icon name='LinkedinOutlined' {...{ ...props, ...context.attrs }} icon={LinkedinOutlinedSvg} />
);

IconLinkedinOutlined.displayName = 'IconLinkedinOutlined';
IconLinkedinOutlined.theme = 'outlined';
IconLinkedinOutlined.originName = 'linkedin';

export default IconLinkedinOutlined;
