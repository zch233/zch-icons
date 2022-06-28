// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ProjectOutlinedSvg from 'gupo-icons-base/es/asn/ProjectOutlined';

export interface ProjectOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconProjectOutlined: ProjectOutlinedIconType = (props, context) => (
    <Icon name='ProjectOutlined' {...{ ...props, ...context.attrs }} icon={ProjectOutlinedSvg} />
);

IconProjectOutlined.displayName = 'IconProjectOutlined';
IconProjectOutlined.theme = 'outlined';
IconProjectOutlined.originName = 'project';

export default IconProjectOutlined;
