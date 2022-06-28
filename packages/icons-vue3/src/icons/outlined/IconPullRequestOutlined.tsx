// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PullRequestOutlinedSvg from 'gupo-icons-base/es/asn/PullRequestOutlined';

export interface PullRequestOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconPullRequestOutlined: PullRequestOutlinedIconType = (props, context) => (
    <Icon name='PullRequestOutlined' {...{ ...props, ...context.attrs }} icon={PullRequestOutlinedSvg} />
);

IconPullRequestOutlined.displayName = 'IconPullRequestOutlined';
IconPullRequestOutlined.theme = 'outlined';
IconPullRequestOutlined.originName = 'pull-request';

export default IconPullRequestOutlined;
