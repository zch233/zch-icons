// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BuildOutlinedSvg from 'gupo-icons-base/es/asn/BuildOutlined';

export interface BuildOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBuildOutlined: BuildOutlinedIconType = (props, context) => <Icon name='BuildOutlined' {...{ ...props, ...context.attrs }} icon={BuildOutlinedSvg} />;

IconBuildOutlined.displayName = 'IconBuildOutlined';
IconBuildOutlined.theme = 'outlined';
IconBuildOutlined.originName = 'build';

export default IconBuildOutlined;
