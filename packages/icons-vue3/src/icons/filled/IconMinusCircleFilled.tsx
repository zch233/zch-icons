// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import MinusCircleFilledSvg from 'icon-base/es/asn/MinusCircleFilled';

export interface MinusCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconMinusCircleFilled: MinusCircleFilledIconType = (props, context) => (
    <Icon name='MinusCircleFilled' {...{ ...props, ...context.attrs }} icon={MinusCircleFilledSvg} />
);

IconMinusCircleFilled.displayName = 'IconMinusCircleFilled';

export default IconMinusCircleFilled;
