// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AppleFilledSvg from 'gupo-icons-base/es/asn/AppleFilled';

export interface AppleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconAppleFilled: AppleFilledIconType = (props, context) => <Icon name='AppleFilled' {...{ ...props, ...context.attrs }} icon={AppleFilledSvg} />;

IconAppleFilled.displayName = 'IconAppleFilled';
IconAppleFilled.theme = 'filled';
IconAppleFilled.originName = 'apple';

export default IconAppleFilled;
