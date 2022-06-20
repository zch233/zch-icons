// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import PullRequestOutlinedSvg from 'icon-base/es/asn/PullRequestOutlined';

export interface PullRequestOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconPullRequestOutlined: PullRequestOutlinedIconType = (props, context) => (
    <Icon name='PullRequestOutlined' {...{ ...props, ...context.attrs }} icon={PullRequestOutlinedSvg} />
);

IconPullRequestOutlined.displayName = 'IconPullRequestOutlined';

export default IconPullRequestOutlined;
