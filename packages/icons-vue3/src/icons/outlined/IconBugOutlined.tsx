// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BugOutlinedSvg from 'gupo-icons-base/es/asn/BugOutlined';

export interface BugOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBugOutlined: BugOutlinedIconType = (props, context) => <Icon name='BugOutlined' {...{ ...props, ...context.attrs }} icon={BugOutlinedSvg} />;

IconBugOutlined.displayName = 'IconBugOutlined';
IconBugOutlined.theme = 'outlined';
IconBugOutlined.originName = 'bug';

export default IconBugOutlined;
