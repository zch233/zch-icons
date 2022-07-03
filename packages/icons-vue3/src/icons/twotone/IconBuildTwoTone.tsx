// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BuildTwotoneSvg from 'icons-base/es/asn/BuildTwotone';

export interface BuildTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBuildTwotone: BuildTwotoneIconType = (props, context) => <Icon name='BuildTwotone' {...{ ...props, ...context.attrs }} icon={BuildTwotoneSvg} />;

IconBuildTwotone.displayName = 'IconBuildTwotone';
IconBuildTwotone.theme = 'twotone';
IconBuildTwotone.originName = 'build';

export default IconBuildTwotone;
