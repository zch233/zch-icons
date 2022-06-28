// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ContainerFilledSvg from 'gupo-icons-base/es/asn/ContainerFilled';

export interface ContainerFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconContainerFilled: ContainerFilledIconType = (props, context) => (
    <Icon name='ContainerFilled' {...{ ...props, ...context.attrs }} icon={ContainerFilledSvg} />
);

IconContainerFilled.displayName = 'IconContainerFilled';
IconContainerFilled.theme = 'filled';
IconContainerFilled.originName = 'container';

export default IconContainerFilled;
