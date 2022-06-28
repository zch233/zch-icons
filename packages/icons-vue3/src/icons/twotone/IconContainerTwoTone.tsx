// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ContainerTwotoneSvg from 'gupo-icons-base/es/asn/ContainerTwotone';

export interface ContainerTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconContainerTwotone: ContainerTwotoneIconType = (props, context) => (
    <Icon name='ContainerTwotone' {...{ ...props, ...context.attrs }} icon={ContainerTwotoneSvg} />
);

IconContainerTwotone.displayName = 'IconContainerTwotone';
IconContainerTwotone.theme = 'twotone';
IconContainerTwotone.originName = 'container';

export default IconContainerTwotone;
