// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BugTwoToneSvg from 'icon-base/es/asn/BugTwoTone';

export interface BugTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBugTwoTone: BugTwoToneIconType = (props, context) => <Icon name='BugTwoTone' {...{ ...props, ...context.attrs }} icon={BugTwoToneSvg} />;

IconBugTwoTone.displayName = 'IconBugTwoTone';

export default IconBugTwoTone;
