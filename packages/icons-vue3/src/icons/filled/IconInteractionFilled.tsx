// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InteractionFilledSvg from 'gupo-icons-base/es/asn/InteractionFilled';

export interface InteractionFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconInteractionFilled: InteractionFilledIconType = (props, context) => (
    <Icon name='InteractionFilled' {...{ ...props, ...context.attrs }} icon={InteractionFilledSvg} />
);

IconInteractionFilled.displayName = 'IconInteractionFilled';
IconInteractionFilled.theme = 'filled';
IconInteractionFilled.originName = 'interaction';

export default IconInteractionFilled;
