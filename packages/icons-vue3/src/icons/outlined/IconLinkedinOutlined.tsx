// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import LinkedinOutlinedSvg from 'icon-base/es/asn/LinkedinOutlined';

export interface LinkedinOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconLinkedinOutlined: LinkedinOutlinedIconType = (props, context) => (
    <Icon name='LinkedinOutlined' {...{ ...props, ...context.attrs }} icon={LinkedinOutlinedSvg} />
);

IconLinkedinOutlined.displayName = 'IconLinkedinOutlined';

export default IconLinkedinOutlined;
