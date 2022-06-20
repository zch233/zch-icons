// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DislikeFilledSvg from 'icon-base/es/asn/DislikeFilled';

export interface DislikeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconDislikeFilled: DislikeFilledIconType = (props, context) => <Icon name='DislikeFilled' {...{ ...props, ...context.attrs }} icon={DislikeFilledSvg} />;

IconDislikeFilled.displayName = 'IconDislikeFilled';

export default IconDislikeFilled;
