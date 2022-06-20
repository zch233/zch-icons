// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MinusCircleTwoToneSvg from 'icon-base/es/asn/MinusCircleTwoTone';

export interface MinusCircleTwoToneIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMinusCircleTwoTone: MinusCircleTwoToneIconType = (props, context) => (
    <Icon name='MinusCircleTwoTone' {...{ ...props, ...context.attrs }} icon={MinusCircleTwoToneSvg} />
);

IconMinusCircleTwoTone.displayName = 'IconMinusCircleTwoTone';

export default IconMinusCircleTwoTone;
