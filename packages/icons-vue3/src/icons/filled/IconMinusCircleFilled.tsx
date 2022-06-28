// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MinusCircleFilledSvg from 'gupo-icons-base/es/asn/MinusCircleFilled';

export interface MinusCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
    theme: string;
    originName: string;
}

const IconMinusCircleFilled: MinusCircleFilledIconType = (props, context) => (
    <Icon name='MinusCircleFilled' {...{ ...props, ...context.attrs }} icon={MinusCircleFilledSvg} />
);

IconMinusCircleFilled.displayName = 'IconMinusCircleFilled';
IconMinusCircleFilled.theme = 'filled';
IconMinusCircleFilled.originName = 'minus-circle';

export default IconMinusCircleFilled;
