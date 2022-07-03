// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RedEnvelopeOutlinedSvg from 'icons-base/es/asn/RedEnvelopeOutlined';

export interface RedEnvelopeOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRedEnvelopeOutlined: RedEnvelopeOutlinedIconType = (props, context) => (
    <Icon name='RedEnvelopeOutlined' {...{ ...props, ...context.attrs }} icon={RedEnvelopeOutlinedSvg} />
);

IconRedEnvelopeOutlined.displayName = 'IconRedEnvelopeOutlined';
IconRedEnvelopeOutlined.theme = 'outlined';
IconRedEnvelopeOutlined.originName = 'red-envelope';

export default IconRedEnvelopeOutlined;
