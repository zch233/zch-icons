// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RedEnvelopeTwotoneSvg from 'icons-base/es/asn/RedEnvelopeTwotone';

export interface RedEnvelopeTwotoneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconRedEnvelopeTwotone: RedEnvelopeTwotoneIconType = (props, context) => (
    <Icon name='RedEnvelopeTwotone' {...{ ...props, ...context.attrs }} icon={RedEnvelopeTwotoneSvg} />
);

IconRedEnvelopeTwotone.displayName = 'IconRedEnvelopeTwotone';
IconRedEnvelopeTwotone.theme = 'twotone';
IconRedEnvelopeTwotone.originName = 'red-envelope';

export default IconRedEnvelopeTwotone;
