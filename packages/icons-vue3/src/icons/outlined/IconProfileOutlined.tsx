// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ProfileOutlinedSvg from 'gupo-icons-base/es/asn/ProfileOutlined';

export interface ProfileOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconProfileOutlined: ProfileOutlinedIconType = (props, context) => (
    <Icon name='ProfileOutlined' {...{ ...props, ...context.attrs }} icon={ProfileOutlinedSvg} />
);

IconProfileOutlined.displayName = 'IconProfileOutlined';
IconProfileOutlined.theme = 'outlined';
IconProfileOutlined.originName = 'profile';

export default IconProfileOutlined;
