// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import GitlabFilledSvg from 'icon-base/es/asn/GitlabFilled';

export interface GitlabFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconGitlabFilled: GitlabFilledIconType = (props, context) => <Icon name='GitlabFilled' {...{ ...props, ...context.attrs }} icon={GitlabFilledSvg} />;

IconGitlabFilled.displayName = 'IconGitlabFilled';

export default IconGitlabFilled;
