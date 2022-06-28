// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import HomeOutlinedSvg from 'gupo-icons-base/es/asn/HomeOutlined';

export interface HomeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconHomeOutlined: HomeOutlinedIconType = (props, context) => <Icon name='HomeOutlined' {...{ ...props, ...context.attrs }} icon={HomeOutlinedSvg} />;

IconHomeOutlined.displayName = 'IconHomeOutlined';
IconHomeOutlined.theme = 'outlined';
IconHomeOutlined.originName = 'home';

export default IconHomeOutlined;
