// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import RedEnvelopeTwoToneSvg from 'icon-base/es/asn/RedEnvelopeTwoTone';

export interface RedEnvelopeTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconRedEnvelopeTwoTone: RedEnvelopeTwoToneIconType = (props, context) => (
    <Icon name='RedEnvelopeTwoTone' {...{ ...props, ...context.attrs }} icon={RedEnvelopeTwoToneSvg} />
);

IconRedEnvelopeTwoTone.displayName = 'IconRedEnvelopeTwoTone';

export default IconRedEnvelopeTwoTone;
