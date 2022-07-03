// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import DislikeFilledSvg from 'icons-base/es/asn/DislikeFilled';

export interface DislikeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconDislikeFilled: DislikeFilledIconType = (props, context) => <Icon name='DislikeFilled' {...{ ...props, ...context.attrs }} icon={DislikeFilledSvg} />;

IconDislikeFilled.displayName = 'IconDislikeFilled';
IconDislikeFilled.theme = 'filled';
IconDislikeFilled.originName = 'dislike';

export default IconDislikeFilled;
