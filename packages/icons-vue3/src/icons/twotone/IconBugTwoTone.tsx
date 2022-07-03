// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BugTwotoneSvg from 'icons-base/es/asn/BugTwotone';

export interface BugTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconBugTwotone: BugTwotoneIconType = (props, context) => <Icon name='BugTwotone' {...{ ...props, ...context.attrs }} icon={BugTwotoneSvg} />;

IconBugTwotone.displayName = 'IconBugTwotone';
IconBugTwotone.theme = 'twotone';
IconBugTwotone.originName = 'bug';

export default IconBugTwotone;
