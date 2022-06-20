// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GithubFilledSvg from 'icon-base/es/asn/GithubFilled';

export interface GithubFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGithubFilled: GithubFilledIconType = (props, context) => <Icon name='GithubFilled' {...{ ...props, ...context.attrs }} icon={GithubFilledSvg} />;

IconGithubFilled.displayName = 'IconGithubFilled';

export default IconGithubFilled;
