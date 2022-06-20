// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import AppleFilledSvg from 'icon-base/es/asn/AppleFilled';

export interface AppleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconAppleFilled: AppleFilledIconType = (props, context) => <Icon name='AppleFilled' {...{ ...props, ...context.attrs }} icon={AppleFilledSvg} />;

IconAppleFilled.displayName = 'IconAppleFilled';

export default IconAppleFilled;
