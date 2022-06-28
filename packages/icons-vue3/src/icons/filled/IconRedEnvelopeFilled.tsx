// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RedEnvelopeFilledSvg from 'gupo-icons-base/es/asn/RedEnvelopeFilled';

export interface RedEnvelopeFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRedEnvelopeFilled: RedEnvelopeFilledIconType = (props, context) => (
    <Icon name='RedEnvelopeFilled' {...{ ...props, ...context.attrs }} icon={RedEnvelopeFilledSvg} />
);

IconRedEnvelopeFilled.displayName = 'IconRedEnvelopeFilled';
IconRedEnvelopeFilled.theme = 'filled';
IconRedEnvelopeFilled.originName = 'red-envelope';

export default IconRedEnvelopeFilled;
