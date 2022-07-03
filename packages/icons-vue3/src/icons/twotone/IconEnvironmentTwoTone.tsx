// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EnvironmentTwotoneSvg from 'icons-base/es/asn/EnvironmentTwotone';

export interface EnvironmentTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconEnvironmentTwotone: EnvironmentTwotoneIconType = (props, context) => (
    <Icon name='EnvironmentTwotone' {...{ ...props, ...context.attrs }} icon={EnvironmentTwotoneSvg} />
);

IconEnvironmentTwotone.displayName = 'IconEnvironmentTwotone';
IconEnvironmentTwotone.theme = 'twotone';
IconEnvironmentTwotone.originName = 'environment';

export default IconEnvironmentTwotone;
