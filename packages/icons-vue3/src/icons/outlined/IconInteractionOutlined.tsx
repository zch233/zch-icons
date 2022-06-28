// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import InteractionOutlinedSvg from 'gupo-icons-base/es/asn/InteractionOutlined';

export interface InteractionOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconInteractionOutlined: InteractionOutlinedIconType = (props, context) => (
    <Icon name='InteractionOutlined' {...{ ...props, ...context.attrs }} icon={InteractionOutlinedSvg} />
);

IconInteractionOutlined.displayName = 'IconInteractionOutlined';
IconInteractionOutlined.theme = 'outlined';
IconInteractionOutlined.originName = 'interaction';

export default IconInteractionOutlined;
