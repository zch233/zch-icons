// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GithubOutlinedSvg from 'gupo-icons-base/es/asn/GithubOutlined';

export interface GithubOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconGithubOutlined: GithubOutlinedIconType = (props, context) => (
    <Icon name='GithubOutlined' {...{ ...props, ...context.attrs }} icon={GithubOutlinedSvg} />
);

IconGithubOutlined.displayName = 'IconGithubOutlined';
IconGithubOutlined.theme = 'outlined';
IconGithubOutlined.originName = 'github';

export default IconGithubOutlined;
