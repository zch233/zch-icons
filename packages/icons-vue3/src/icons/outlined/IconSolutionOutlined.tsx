// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import SolutionOutlinedSvg from 'icon-base/es/asn/SolutionOutlined';

export interface SolutionOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconSolutionOutlined: SolutionOutlinedIconType = (props, context) => (
    <Icon name='SolutionOutlined' {...{ ...props, ...context.attrs }} icon={SolutionOutlinedSvg} />
);

IconSolutionOutlined.displayName = 'IconSolutionOutlined';

export default IconSolutionOutlined;
