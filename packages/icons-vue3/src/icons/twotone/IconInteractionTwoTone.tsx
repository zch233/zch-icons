// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InteractionTwoToneSvg from 'icon-base/es/asn/InteractionTwoTone';

export interface InteractionTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconInteractionTwoTone: InteractionTwoToneIconType = (props, context) => (
    <Icon name='InteractionTwoTone' {...{ ...props, ...context.attrs }} icon={InteractionTwoToneSvg} />
);

IconInteractionTwoTone.displayName = 'IconInteractionTwoTone';

export default IconInteractionTwoTone;
