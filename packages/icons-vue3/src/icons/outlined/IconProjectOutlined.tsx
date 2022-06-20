// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ProjectOutlinedSvg from 'icon-base/es/asn/ProjectOutlined';

export interface ProjectOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconProjectOutlined: ProjectOutlinedIconType = (props, context) => (
    <Icon name='ProjectOutlined' {...{ ...props, ...context.attrs }} icon={ProjectOutlinedSvg} />
);

IconProjectOutlined.displayName = 'IconProjectOutlined';

export default IconProjectOutlined;
