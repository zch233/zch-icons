// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InteractionFilledSvg from 'icon-base/es/asn/InteractionFilled';

export interface InteractionFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconInteractionFilled: InteractionFilledIconType = (props, context) => (
    <Icon name='InteractionFilled' {...{ ...props, ...context.attrs }} icon={InteractionFilledSvg} />
);

IconInteractionFilled.displayName = 'IconInteractionFilled';

export default IconInteractionFilled;
