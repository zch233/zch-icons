// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import BugFilledSvg from 'icon-base/es/asn/BugFilled';

export interface BugFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconBugFilled: BugFilledIconType = (props, context) => <Icon name='BugFilled' {...{ ...props, ...context.attrs }} icon={BugFilledSvg} />;

IconBugFilled.displayName = 'IconBugFilled';

export default IconBugFilled;
