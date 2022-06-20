// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ProjectFilledSvg from 'icon-base/es/asn/ProjectFilled';

export interface ProjectFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconProjectFilled: ProjectFilledIconType = (props, context) => <Icon name='ProjectFilled' {...{ ...props, ...context.attrs }} icon={ProjectFilledSvg} />;

IconProjectFilled.displayName = 'IconProjectFilled';

export default IconProjectFilled;
