// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EnvironmentFilledSvg from 'icon-base/es/asn/EnvironmentFilled';

export interface EnvironmentFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconEnvironmentFilled: EnvironmentFilledIconType = (props, context) => (
    <Icon name='EnvironmentFilled' {...{ ...props, ...context.attrs }} icon={EnvironmentFilledSvg} />
);

IconEnvironmentFilled.displayName = 'IconEnvironmentFilled';

export default IconEnvironmentFilled;
