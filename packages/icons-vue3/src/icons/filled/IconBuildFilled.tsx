// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BuildFilledSvg from 'icon-base/es/asn/BuildFilled';

export interface BuildFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBuildFilled: BuildFilledIconType = (props, context) => <Icon name='BuildFilled' {...{ ...props, ...context.attrs }} icon={BuildFilledSvg} />;

IconBuildFilled.displayName = 'IconBuildFilled';

export default IconBuildFilled;
