// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ProjectFilledSvg from 'icons-base/es/asn/ProjectFilled';

export interface ProjectFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconProjectFilled: ProjectFilledIconType = (props, context) => <Icon name='ProjectFilled' {...{ ...props, ...context.attrs }} icon={ProjectFilledSvg} />;

IconProjectFilled.displayName = 'IconProjectFilled';
IconProjectFilled.theme = 'filled';
IconProjectFilled.originName = 'project';

export default IconProjectFilled;
