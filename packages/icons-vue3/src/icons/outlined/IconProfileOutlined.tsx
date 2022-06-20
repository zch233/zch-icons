// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ProfileOutlinedSvg from 'icon-base/es/asn/ProfileOutlined';

export interface ProfileOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconProfileOutlined: ProfileOutlinedIconType = (props, context) => (
    <Icon name='ProfileOutlined' {...{ ...props, ...context.attrs }} icon={ProfileOutlinedSvg} />
);

IconProfileOutlined.displayName = 'IconProfileOutlined';

export default IconProfileOutlined;
