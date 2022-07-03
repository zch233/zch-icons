// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GitlabOutlinedSvg from 'icons-base/es/asn/GitlabOutlined';

export interface GitlabOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGitlabOutlined: GitlabOutlinedIconType = (props, context) => (
    <Icon name='GitlabOutlined' {...{ ...props, ...context.attrs }} icon={GitlabOutlinedSvg} />
);

IconGitlabOutlined.displayName = 'IconGitlabOutlined';
IconGitlabOutlined.theme = 'outlined';
IconGitlabOutlined.originName = 'gitlab';

export default IconGitlabOutlined;
