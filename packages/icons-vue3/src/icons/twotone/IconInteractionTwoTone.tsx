// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InteractionTwotoneSvg from 'gupo-icons-base/es/asn/InteractionTwotone';

export interface InteractionTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconInteractionTwotone: InteractionTwotoneIconType = (props, context) => (
    <Icon name='InteractionTwotone' {...{ ...props, ...context.attrs }} icon={InteractionTwotoneSvg} />
);

IconInteractionTwotone.displayName = 'IconInteractionTwotone';
IconInteractionTwotone.theme = 'twotone';
IconInteractionTwotone.originName = 'interaction';

export default IconInteractionTwotone;
