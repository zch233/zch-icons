// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ProjectTwotoneSvg from 'gupo-icons-base/es/asn/ProjectTwotone';

export interface ProjectTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconProjectTwotone: ProjectTwotoneIconType = (props, context) => (
    <Icon name='ProjectTwotone' {...{ ...props, ...context.attrs }} icon={ProjectTwotoneSvg} />
);

IconProjectTwotone.displayName = 'IconProjectTwotone';
IconProjectTwotone.theme = 'twotone';
IconProjectTwotone.originName = 'project';

export default IconProjectTwotone;
