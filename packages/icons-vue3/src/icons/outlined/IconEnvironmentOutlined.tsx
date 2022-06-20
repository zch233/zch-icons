// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import EnvironmentOutlinedSvg from 'icon-base/es/asn/EnvironmentOutlined';

export interface EnvironmentOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconEnvironmentOutlined: EnvironmentOutlinedIconType = (props, context) => (
    <Icon name='EnvironmentOutlined' {...{ ...props, ...context.attrs }} icon={EnvironmentOutlinedSvg} />
);

IconEnvironmentOutlined.displayName = 'IconEnvironmentOutlined';

export default IconEnvironmentOutlined;
