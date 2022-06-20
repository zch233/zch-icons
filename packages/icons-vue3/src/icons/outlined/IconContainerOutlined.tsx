// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ContainerOutlinedSvg from 'icon-base/es/asn/ContainerOutlined';

export interface ContainerOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconContainerOutlined: ContainerOutlinedIconType = (props, context) => (
    <Icon name='ContainerOutlined' {...{ ...props, ...context.attrs }} icon={ContainerOutlinedSvg} />
);

IconContainerOutlined.displayName = 'IconContainerOutlined';

export default IconContainerOutlined;
